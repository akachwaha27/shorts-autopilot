"""Upload to YouTube, Instagram and TikTok via their official free APIs."""
import os
import time

import requests

from . import config


# ---------------- YouTube ----------------
def youtube(path, title, description, tags):
    if not (config.YT_CLIENT_ID and config.YT_CLIENT_SECRET and config.YT_REFRESH_TOKEN):
        return None, "skipped (not configured)"
    from google.oauth2.credentials import Credentials
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload

    creds = Credentials(None, refresh_token=config.YT_REFRESH_TOKEN, client_id=config.YT_CLIENT_ID,
                        client_secret=config.YT_CLIENT_SECRET, token_uri="https://oauth2.googleapis.com/token",
                        scopes=["https://www.googleapis.com/auth/youtube.upload"])
    yt = build("youtube", "v3", credentials=creds, cache_discovery=False)
    body = {
        "snippet": {"title": title[:100], "description": description[:4900],
                    "tags": [t.lstrip("#") for t in tags][:15], "categoryId": "27",
                    "defaultLanguage": config.LANGUAGE, "defaultAudioLanguage": config.LANGUAGE},
        "status": {"privacyStatus": config.YT_PRIVACY, "selfDeclaredMadeForKids": False,
                   "containsSyntheticMedia": True},  # YouTube's altered/synthetic content disclosure
    }
    req = yt.videos().insert(part="snippet,status", body=body,
                             media_body=MediaFileUpload(path, mimetype="video/mp4", resumable=True))
    resp = None
    while resp is None:
        _, resp = req.next_chunk()
    vid = resp["id"]
    return f"https://youtube.com/shorts/{vid}", resp["status"].get("privacyStatus", "")


# ---------------- Instagram Reels ----------------
def instagram(path, caption):
    if not (config.IG_USER_ID and config.IG_ACCESS_TOKEN):
        return None, "skipped (not configured)"
    g = f"https://{config.IG_GRAPH_HOST}/{config.IG_API_VERSION}"
    tok = config.IG_ACCESS_TOKEN
    r = requests.post(f"{g}/{config.IG_USER_ID}/media", timeout=60, data={
        "media_type": "REELS", "upload_type": "resumable", "caption": caption[:2150],
        "share_to_feed": "true", "access_token": tok}).json()
    if "id" not in r:
        raise RuntimeError(f"IG container failed: {r}")
    cid = r["id"]
    with open(path, "rb") as f:
        up = requests.post(f"https://rupload.facebook.com/ig-api-upload/{config.IG_API_VERSION}/{cid}",
                           headers={"Authorization": f"OAuth {tok}", "offset": "0",
                                    "file_size": str(os.path.getsize(path))}, data=f, timeout=600)
    if up.status_code >= 300:
        raise RuntimeError(f"IG upload failed: {up.text}")
    for _ in range(60):
        s = requests.get(f"{g}/{cid}", params={"fields": "status_code,status", "access_token": tok}, timeout=30).json()
        if s.get("status_code") == "FINISHED":
            break
        if s.get("status_code") == "ERROR":
            raise RuntimeError(f"IG processing error: {s}")
        time.sleep(10)
    pub = requests.post(f"{g}/{config.IG_USER_ID}/media_publish", timeout=60,
                        data={"creation_id": cid, "access_token": tok}).json()
    if "id" not in pub:
        raise RuntimeError(f"IG publish failed: {pub}")
    link = requests.get(f"{g}/{pub['id']}", params={"fields": "permalink", "access_token": tok}, timeout=30).json()
    return link.get("permalink", f"media id {pub['id']}"), "published"


# ---------------- TikTok ----------------
def _tiktok_token():
    if config.TIKTOK_REFRESH_TOKEN and config.TIKTOK_CLIENT_KEY and config.TIKTOK_CLIENT_SECRET:
        r = requests.post("https://open.tiktokapis.com/v2/oauth/token/", timeout=30, data={
            "client_key": config.TIKTOK_CLIENT_KEY, "client_secret": config.TIKTOK_CLIENT_SECRET,
            "grant_type": "refresh_token", "refresh_token": config.TIKTOK_REFRESH_TOKEN}).json()
        if r.get("access_token"):
            return r["access_token"]
        print("TikTok token refresh failed:", r)
    return config.TIKTOK_ACCESS_TOKEN


def tiktok(path, caption):
    token = _tiktok_token()
    if not token:
        return None, "skipped (not configured)"
    size = os.path.getsize(path)
    hdr = {"Authorization": f"Bearer {token}", "Content-Type": "application/json; charset=UTF-8"}
    post_info = {"title": caption[:2200], "privacy_level": config.TIKTOK_PRIVACY,
                 "disable_comment": False, "disable_duet": False, "disable_stitch": False,
                 "is_aigc": True}  # TikTok "AI-generated content" label
    body = {"post_info": post_info,
            "source_info": {"source": "FILE_UPLOAD", "video_size": size, "chunk_size": size, "total_chunk_count": 1}}
    r = requests.post("https://open.tiktokapis.com/v2/post/publish/video/init/", headers=hdr, json=body, timeout=60).json()
    if r.get("error", {}).get("code") not in (None, "ok") and "is_aigc" in str(r):
        post_info.pop("is_aigc")
        r = requests.post("https://open.tiktokapis.com/v2/post/publish/video/init/", headers=hdr, json=body, timeout=60).json()
    if r.get("error", {}).get("code") not in (None, "ok"):
        raise RuntimeError(f"TikTok init failed: {r}")
    data = r["data"]
    with open(path, "rb") as f:
        up = requests.put(data["upload_url"], data=f, timeout=600, headers={
            "Content-Type": "video/mp4", "Content-Length": str(size),
            "Content-Range": f"bytes 0-{size - 1}/{size}"})
    if up.status_code >= 300:
        raise RuntimeError(f"TikTok upload failed: {up.status_code} {up.text}")
    status = "processing"
    for _ in range(30):
        s = requests.post("https://open.tiktokapis.com/v2/post/publish/status/fetch/", headers=hdr,
                          json={"publish_id": data["publish_id"]}, timeout=30).json()
        status = s.get("data", {}).get("status", status)
        if status in ("PUBLISH_COMPLETE", "FAILED"):
            break
        time.sleep(10)
    if status == "FAILED":
        raise RuntimeError(f"TikTok publish failed: {s}")
    return "https://www.tiktok.com/ (check your profile)", f"{status}, privacy={config.TIKTOK_PRIVACY}"


def publish_all(path, title, description, hashtags):
    caption = f"{title}\n\n{description}"
    results = {}
    for name, fn in (("YouTube", lambda: youtube(path, title, description, hashtags)),
                     ("Instagram", lambda: instagram(path, caption)),
                     ("TikTok", lambda: tiktok(path, caption))):
        try:
            results[name] = fn()
        except Exception as e:  # noqa: BLE001
            results[name] = (None, f"FAILED: {str(e)[:300]}")
    return results
