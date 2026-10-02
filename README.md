# Shorts Autopilot

Free, hands-off short-video pipeline. It runs on **GitHub Actions**, which acts as a free server, and you control it through **Telegram**.

```
Every morning ─► Google Trends + YouTube Trending + top Shorts (48h)
              ─► keyword filter + AI filter remove anything controversial
              ─► Telegram: "Today's 5 ideas"  [🎬1] [🎬2] [🎬3] [🎬4] [🎬5] [⏭ Skip]
You tap 1–3 ideas (or ignore it: after 3h it makes the top 2 itself)
              ─► AI writes an original script ─► AI safety review (rewrites or drops)
              ─► voiceover + stock clips/AI images + captions ─► 1080×1920 MP4
              ─► stored in your repo's Releases ─► preview sent to Telegram [✅ Publish] [❌ Reject]
You tap Publish (or ignore it: after 2h it publishes itself)
              ─► YouTube Shorts + Instagram Reels + TikTok ─► "🚀 Posted" with links
```

If you never touch Telegram, it still runs every day on its own. Telegram just lets you steer it.

## Free tools used

| Job | Tool |
|---|---|
| Scheduler and server | GitHub Actions (cron) |
| Trends | Google Trends RSS (no key), YouTube Data API (free quota) |
| Script, safety review, titles, hashtags | Google Gemini API, free tier |
| Voice | edge-tts (Microsoft neural voices) |
| Visuals | Pixabay or Pexels stock video/photos (free license). Optional: FLUX AI images on Cloudflare Workers AI free tier |
| Editing | FFmpeg |
| Storage | GitHub Releases on your repo |
| Publishing | Official YouTube, Instagram Graph and TikTok Content Posting APIs |

**About TikTok and Instagram trends:** neither platform offers a free trends API, and scraping them breaks their terms. As a stand-in, the bot uses the most-viewed YouTube Shorts from the last 48 hours. The same short-form trends usually show up on TikTok and Reels at about the same time.

---

## Setup (about 1–2 hours, one time)

### 1. Create the repo
Create a **public** GitHub repo and upload this folder.

Public repos get unlimited free Actions minutes. A private repo has about 2,000 free minutes a month. If you go private, change the poll cron in `.github/workflows/autopilot.yml` from `*/20` to `0 * * * *` (hourly).

### 2. Telegram bot
1. In Telegram, message **@BotFather** and send `/newbot`. Copy the token it gives you; this is `TELEGRAM_BOT_TOKEN`.
2. Send your new bot any message.
3. Open `https://api.telegram.org/bot<TOKEN>/getUpdates` in a browser. The number at `"chat":{"id":...}` is `TELEGRAM_CHAT_ID`.

### 3. Gemini
Go to https://aistudio.google.com, click **Get API key**, and use it as `GEMINI_API_KEY`.

### 4. YouTube (Google Cloud, free)
1. Go to https://console.cloud.google.com, create a project, and enable **YouTube Data API v3**.
2. Under **Credentials**, create an **API key**. This is `YOUTUBE_API_KEY`, used for reading trends.
3. Set up the **OAuth consent screen**: choose External and add yourself as a user. Then click **Publish app / In production**. If you skip this, the refresh token expires every 7 days. Using an unverified app with only yourself as the user is fine.
4. Under **Credentials**, create an **OAuth client ID** of type **Desktop app**. Download it as `client_secret.json`.
5. On your computer run:
   ```
   pip install google-auth-oauthlib
   python tools/get_youtube_token.py
   ```
   It prints `YT_CLIENT_ID`, `YT_CLIENT_SECRET` and `YT_REFRESH_TOKEN`.
6. Google keeps API uploads from new projects **private** until the project passes an audit. Until then:
   - Set the Variable `YT_PRIVACY` to `private`.
   - Submit the free audit form: https://support.google.com/youtube/contact/yt_api_form
   - After approval, set `YT_PRIVACY` to `public`.

### 5. Stock footage (Pixabay and/or Pexels)
- **Pixabay:** create a free account at pixabay.com, then open https://pixabay.com/api/docs/. Your key appears in the "Parameters" section. Save it as `PIXABAY_API_KEY`.
- **Pexels (optional):** if Pexels is issuing keys again, get one at https://www.pexels.com/api/ and save it as `PEXELS_API_KEY`. When both keys are set, Pexels is tried first and Pixabay fills the gaps.

### 6. Instagram Reels (optional)
1. Switch your Instagram account to **Creator** or **Business** and link it to a **Facebook Page**.
2. At https://developers.facebook.com, create an app (type **Business**) and add the **Instagram** product.
3. In **Graph API Explorer**, choose your app and request these permissions: `instagram_basic`, `instagram_content_publish`, `pages_show_list`, `pages_read_engagement`. Then generate a token.
4. Exchange it for a long-lived token using the **Access Token Debugger** ("Extend").
5. Call `GET /me/accounts?fields=access_token,instagram_business_account`.
   - The Page `access_token` from a long-lived user token does not expire. Use it as `IG_ACCESS_TOKEN`.
   - `instagram_business_account.id` is `IG_USER_ID`.

You don't need app review, because you're only posting to your own account.

### 7. TikTok (optional)
1. At https://developers.tiktok.com, create an app and add **Login Kit** and **Content Posting API** (with Direct Post enabled). Add the scopes `user.info.basic` and `video.publish`.
2. Run `python tools/get_tiktok_token.py`. It prints `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET` and `TIKTOK_REFRESH_TOKEN`. Re-run it about once a year.
3. Until TikTok audits your app, posts can only be **private** (`SELF_ONLY`). You can make each one public in the TikTok app. Apply for the audit in the developer portal, then set the Variable `TIKTOK_PRIVACY` to `PUBLIC_TO_EVERYONE`.

### 8. AI images (optional)
1. Create a free Cloudflare account. In the dashboard go to **AI → Workers AI** and create an API token.
2. Set `CF_ACCOUNT_ID` and `CF_API_TOKEN`.
3. Set the Variable `VISUALS` to `ai` (all AI images) or `mixed` (alternating stock clips and AI images).

### 9. Add the keys to GitHub
In the repo, go to **Settings → Secrets and variables → Actions**.

**Secrets:**
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- `GEMINI_API_KEY`, `YOUTUBE_API_KEY`, `PIXABAY_API_KEY` (and/or `PEXELS_API_KEY`)
- `YT_CLIENT_ID`, `YT_CLIENT_SECRET`, `YT_REFRESH_TOKEN`
- `IG_USER_ID`, `IG_ACCESS_TOKEN`
- `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET`, `TIKTOK_REFRESH_TOKEN`
- `CF_ACCOUNT_ID`, `CF_API_TOKEN`

Any platform you leave blank is skipped.

**Variables** (all optional; defaults shown):

| Variable | Default | Meaning |
|---|---|---|
| `NICHE` | general science/tech/nature/food/travel | What kinds of topics to prefer |
| `REGION` | `US` | Trend country |
| `LANGUAGE` | `en` | Language of the video |
| `VOICE` | `en-US-AndrewMultilingualNeural` | Any edge-tts voice |
| `VISUALS` | `pexels` | `pexels`, `ai` or `mixed` |
| `MAX_VIDEOS_PER_DAY` | `3` | Hard daily cap |
| `AUTO_PICK_COUNT` | `2` | How many topics it picks if you don't reply |
| `SELECT_TIMEOUT_HOURS` | `3` | How long it waits for your pick |
| `REQUIRE_APPROVAL` | `true` | Send a preview before publishing |
| `APPROVE_TIMEOUT_HOURS` | `2` | Auto-publish after this long. `0` means always wait for you |
| `YT_PRIVACY` | `public` | Set to `private` until the audit passes |
| `TIKTOK_PRIVACY` | `SELF_ONLY` | Change after the TikTok audit |

### 10. Test it
1. Go to **Actions → autopilot → Run workflow** and enter the command `test`. It renders one sample video and sends it to your Telegram without posting anywhere.
2. Then run it with `trends` to get today's topic list right away.
3. Change the time of the daily scan in the workflow file. The default is 11:53 UTC, which is 7:53 AM New York time during daylight saving time.

## Telegram commands
- Tap 🎬 buttons, or reply `1,3`, to pick topics.
- `/now` fetches fresh trends immediately.
- `/status` lists recent videos.
- Use ✅ / ❌ on a preview to publish or reject it.

The bot replies within about 20 minutes, which is the poll interval. It isn't instant chat.

## Policy safeguards built in
- **No reused content:** every video is a new script, voice and visuals. It never downloads or re-edits other creators' videos or music.
- **Controversy filter (two layers):**
  - A keyword blocklist in `autopilot/trends.py` (politics, war, crime, disasters, religion, health/finance, celebrity drama and similar). You can edit it.
  - Gemini's topic rules plus a separate strict review of every script. Anything flagged is rewritten once, then dropped.
- **Disclosure:**
  - YouTube `containsSyntheticMedia = true`
  - TikTok `is_aigc` label
  - A credits and AI disclosure block in every description
- **Credits:** Pixabay/Pexels creators are named with links, and the AI voice, AI images and any music are listed.
- **Honest metadata:** titles are reviewed for clickbait, with 3–5 relevant hashtags only.
- **Music:** off by default. Only royalty-free tracks that you drop into `assets/music/` are ever used.

Fully automatic AI channels can still be judged "mass-produced" by YouTube's monetization review. Glancing at the preview and occasionally adding your own touch (topic picks, a custom intro) helps.

## Good to know
- GitHub pauses scheduled workflows after 60 days with no repo activity. The bot's daily state commits normally prevent this; if it ever pauses, click **Enable workflow**.
- Free-tier limits (Gemini, Cloudflare, Pixabay, Pexels) change over time. 2–3 videos a day sits well inside them today.
- To change behavior, edit the prompts in `autopilot/writer.py` (script style) and `autopilot/trends.py` (topic choice).
