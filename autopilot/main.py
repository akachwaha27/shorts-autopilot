"""Entry point.

  python -m autopilot.main trends   # daily: find trends, send 5 topics to Telegram
  python -m autopilot.main poll     # every ~20 min: read replies, generate, publish, confirm
  python -m autopilot.main test     # render one video locally without publishing
"""
import html
import os
import re
import sys
import time
import traceback
from datetime import timedelta

from . import config, llm, media, publish, state, storage, telegram, trends, writer


def esc(s):
    return html.escape(str(s))


def today():
    return state.now().strftime("%Y-%m-%d")


# ---------------------------------------------------------------- trends
def cmd_trends(st):
    tries = st.setdefault("trend_tries", {})
    tries[today()] = {"n": tries.get(today(), {}).get("n", 0) + 1, "at": state.iso()}
    for d in sorted(tries)[:-3]:
        tries.pop(d)
    signals = trends.collect()
    topics = trends.pick_topics(signals, st.get("history", []))
    if not topics:
        telegram.send("⚠️ No safe trending topics found today. I'll try again tomorrow.")
        return
    bid = today()
    st["batches"][bid] = {"topics": topics, "sent_at": state.iso(), "selected": [], "status": "waiting"}
    lines = [f"🔥 <b>Today's {len(topics)} trending video ideas</b> ({config.REGION})\n"]
    for i, t in enumerate(topics, 1):
        lines.append(f"<b>{i}. {esc(t['title'])}</b>  ⭐{t.get('virality_score', '?')}/10\n"
                     f"   {esc(t['angle'])}\n   <i>Trend: {esc(t.get('trend_source', ''))}</i>\n")
    auto = (f"If you don't reply within {config.SELECT_TIMEOUT_HOURS:g}h I'll make the top "
            f"{config.AUTO_PICK_COUNT} automatically.")
    lines.append(f"Tap topics below or reply like <code>1,3</code>. {auto}")
    buttons = [[(f"🎬 {i}", f"pick:{bid}:{i - 1}") for i in range(1, len(topics) + 1)],
               [("⏭ Skip today", f"skip:{bid}")]]
    telegram.send("\n".join(lines), buttons)


# ---------------------------------------------------------------- helpers
def videos_today(st):
    return sum(1 for k in st["videos"] if k.startswith(today()))


def queue_topic(st, bid, idx, by="you"):
    batch = st["batches"].get(bid)
    if not batch or idx < 0 or idx >= len(batch["topics"]) or idx in batch["selected"]:
        return False
    if videos_today(st) >= config.MAX_VIDEOS_PER_DAY:
        telegram.send(f"Daily limit of {config.MAX_VIDEOS_PER_DAY} videos reached; skipping #{idx + 1}.")
        return False
    batch["selected"].append(idx)
    vid = f"{bid}-{idx + 1}"
    st["videos"][vid] = {"topic": batch["topics"][idx], "status": "queued", "by": by, "updated": state.iso()}
    telegram.send(f"✅ Queued #{idx + 1}: <b>{esc(batch['topics'][idx]['title'])}</b>. I'll send a preview when it's ready.")
    return True


def latest_waiting(st):
    waiting = [b for b, v in st["batches"].items() if v["status"] == "waiting"]
    return max(waiting) if waiting else None


def handle_updates(st, wait=0):
    ups = telegram.updates(st.get("tg_offset", 0), wait)
    for u in ups:
        st["tg_offset"] = u["update_id"] + 1
        cb = u.get("callback_query")
        msg = u.get("message")
        chat = (cb or {}).get("message", {}).get("chat", {}).get("id") if cb else (msg or {}).get("chat", {}).get("id")
        if str(chat) != str(config.TELEGRAM_CHAT_ID):
            continue  # ignore strangers
        if cb:
            kind, *rest = cb["data"].split(":")
            telegram.answer_callback(cb["id"], "Got it")
            if kind == "pick":
                queue_topic(st, rest[0], int(rest[1]))
            elif kind == "skip" and rest[0] in st["batches"]:
                st["batches"][rest[0]]["status"] = "skipped"
                telegram.send("👍 Skipping today.")
            elif kind in ("ok", "no") and rest[0] in st["videos"]:
                v = st["videos"][rest[0]]
                if v["status"] == "awaiting_approval":
                    v["status"] = "approved" if kind == "ok" else "rejected"
                    v["updated"] = state.iso()
                    if kind == "no":
                        telegram.send(f"🗑 Rejected: {esc(v['package']['title'])}")
        elif msg and msg.get("text"):
            text = msg["text"].strip().lower()
            if text in ("/status", "status"):
                rows = [f"{k}: {v['status']} – {esc(v['topic']['title'])}" for k, v in sorted(st["videos"].items())[-8:]]
                telegram.send("📋 <b>Recent videos</b>\n" + ("\n".join(rows) or "none yet"))
            elif text in ("/now", "/trends"):
                cmd_trends(st)
            elif re.match(r"^/?(publish|approve|post|yes|ok|reject|no|skip)\b", text):
                decide_by_text(st, text, msg)
            elif re.fullmatch(r"[\d,\s]+", text):
                bid = latest_waiting(st)
                if not bid:
                    telegram.send("No open topic list right now. Send /now to fetch fresh trends.")
                for n in re.findall(r"\d+", text):
                    if bid:
                        queue_topic(st, bid, int(n) - 1)
            else:
                telegram.send("Reply with topic numbers like <code>1,3</code>, <b>publish</b> / <b>reject</b> "
                              "for a preview, /status, or /now.")


def decide_by_text(st, text, msg):
    """'publish' approves the waiting preview(s); reply to a preview to target that one.
    'publish all' approves every waiting video; 'reject' does the opposite."""
    approve = re.match(r"^/?(publish|approve|post|yes|ok)\b", text) is not None
    waiting = [k for k, v in sorted(st["videos"].items()) if v["status"] == "awaiting_approval"]
    if not waiting:
        telegram.send("Nothing is waiting for approval right now. /status shows recent videos.")
        return
    reply_id = (msg.get("reply_to_message") or {}).get("message_id")
    if reply_id:
        targets = [k for k in waiting if st["videos"][k].get("tg_msg") == reply_id]
    elif "all" in text or len(waiting) == 1:
        targets = waiting
    else:
        targets = [waiting[-1]]  # most recent preview
        others = len(waiting) - 1
        telegram.send(f"Applying to the latest preview. {others} more waiting: reply to a video, "
                      f"or send <b>{'publish' if approve else 'reject'} all</b>.")
    if not targets:
        telegram.send("That message isn't a video waiting for approval.")
        return
    for k in targets:
        v = st["videos"][k]
        v["status"] = "approved" if approve else "rejected"
        v["updated"] = state.iso()
        telegram.send(("👍 Publishing: " if approve else "🗑 Rejected: ") + esc(v["package"]["title"]))


def auto_select(st):
    for bid, b in st["batches"].items():
        if b["status"] != "waiting":
            continue
        age = state.now() - state.parse(b["sent_at"])
        if age >= timedelta(hours=config.SELECT_TIMEOUT_HOURS):
            if not b["selected"]:
                telegram.send(f"⏰ No reply, so I'm making the top {config.AUTO_PICK_COUNT} topics.")
                for i in range(min(config.AUTO_PICK_COUNT, len(b["topics"]))):
                    queue_topic(st, bid, i, by="auto")
            b["status"] = "closed"


def generate(st, vid):
    v = st["videos"][vid]
    out = os.path.join(config.WORK_DIR, vid)
    ok, issues = False, []
    for _ in range(2):
        pkg = writer.write_package(v["topic"])
        ok, issues = writer.review(pkg)
        if ok:
            break
    if not ok:
        v["status"] = "failed"
        telegram.send(f"🛑 Dropped <b>{esc(v['topic']['title'])}</b>: safety review flagged {esc('; '.join(issues))}")
        return
    path, credits = media.make_video(pkg, out)
    pkg["full_description"] = writer.build_description(pkg, credits)
    v["package"] = pkg
    v["file"] = storage.store(path, f"videos-{vid[:10]}", f"{vid}.mp4")
    st["history"].append(v["topic"]["title"])
    v["updated"] = state.iso()
    if config.REQUIRE_APPROVAL:
        v["status"] = "awaiting_approval"
        auto = (f"\nAuto-publishes in {config.APPROVE_TIMEOUT_HOURS:g}h if you don't respond."
                if config.APPROVE_TIMEOUT_HOURS > 0 else "")
        sent = telegram.send_video(
            path, f"🎥 <b>{esc(pkg['title'])}</b>\n{esc(' '.join(pkg['hashtags']))}\n\n"
                  f"Reply <b>publish</b> or <b>reject</b> (or tap a button).{auto}",
            [[("✅ Publish", f"ok:{vid}"), ("❌ Reject", f"no:{vid}")]])
        v["tg_msg"] = sent.get("message_id")
    else:
        v["status"] = "approved"


def do_publish(st, vid):
    v = st["videos"][vid]
    pkg = v["package"]
    path = storage.fetch(v["file"], os.path.join(config.WORK_DIR, "dl"))
    results = publish.publish_all(path, pkg["title"], pkg["full_description"], pkg["hashtags"])
    v["status"], v["results"], v["updated"] = "published", {k: list(r) for k, r in results.items()}, state.iso()
    lines = [f"🚀 <b>Posted:</b> {esc(pkg['title'])}"]
    for name, (link, status) in results.items():
        icon = "✅" if link else ("➖" if "skipped" in status else "⚠️")
        lines.append(f"{icon} {name}: {esc(link or '')} {esc(status)}")
    telegram.send("\n".join(lines))


def catch_up_trends(st):
    """If today's topic list never arrived (e.g. Gemini was overloaded), retry later in the day."""
    if today() in st["batches"] or state.now().hour < 12:  # daily scan runs ~11:53 UTC
        return
    t = st.get("trend_tries", {}).get(today())
    if t and (t["n"] >= 3 or state.now() - state.parse(t["at"]) < timedelta(hours=1)):
        return
    print("Today's topic list is missing; retrying trends")
    try:
        cmd_trends(st)
    except Exception as e:  # noqa: BLE001
        traceback.print_exc()
        n = st.get("trend_tries", {}).get(today(), {}).get("n", 1)
        more = "I'll try again in about an hour." if n < 3 else "I'll try again tomorrow, or send /now."
        telegram.send(f"⚠️ Couldn't build today's topic list yet ({esc(str(e)[:150])}). {more}")


def cmd_poll(st):
    """Stay online for POLL_MINUTES so Telegram replies are handled within seconds,
    instead of depending on GitHub's (unreliable) schedule for every reply."""
    deadline = time.time() + config.POLL_MINUTES * 60
    first = True
    while True:
        poll_once(st, wait=0 if first else 25)
        state.save(st)
        first = False
        if time.time() >= deadline:
            break


def poll_once(st, wait=0):
    handle_updates(st, wait)
    catch_up_trends(st)
    auto_select(st)
    state.save(st)  # save choices before long work
    for vid, v in sorted(st["videos"].items()):
        try:
            if v["status"] == "queued":
                v["status"] = "generating"
                state.save(st)
                generate(st, vid)
                state.save(st)
        except Exception as e:  # noqa: BLE001
            traceback.print_exc()
            v["status"] = "failed"
            telegram.send(f"⚠️ Generation failed for {esc(v['topic']['title'])}: {esc(str(e)[:300])}")
    for vid, v in sorted(st["videos"].items()):
        if v["status"] == "awaiting_approval" and config.APPROVE_TIMEOUT_HOURS > 0:
            if state.now() - state.parse(v["updated"]) >= timedelta(hours=config.APPROVE_TIMEOUT_HOURS):
                v["status"] = "approved"
        if v["status"] == "approved":
            try:
                do_publish(st, vid)
            except Exception as e:  # noqa: BLE001
                traceback.print_exc()
                v["status"] = "failed"
                telegram.send(f"⚠️ Publishing failed for {esc(v['package']['title'])}: {esc(str(e)[:300])}")
            state.save(st)
        # a run that died mid-generation leaves "generating"; retry once after 2h
        if v["status"] == "generating" and state.now() - state.parse(v["updated"]) > timedelta(hours=2):
            v["status"] = "queued"


def cmd_aicheck():
    results = llm.health_check()
    lines = ["🩺 <b>AI services check</b>"]
    for provider, model, ok, detail in results:
        lines.append(f"{'✅' if ok else '❌'} {esc(provider)} · <code>{esc(model)}</code> · {esc(detail)}")
    working = sum(1 for r in results if r[2])
    lines.append(f"\n{working} of {len(results)} working. The bot uses the first working one automatically.")
    print("\n".join(lines))
    telegram.send("\n".join(lines))


def cmd_test():
    topic = {"title": sys.argv[2] if len(sys.argv) > 2 else "Why octopuses have three hearts",
             "angle": "Quick, surprising biology facts"}
    pkg = writer.write_package(topic)
    print("Review:", writer.review(pkg))
    path, credits = media.make_video(pkg, os.path.join(config.WORK_DIR, "test"))
    desc = writer.build_description(pkg, credits)
    print(pkg["title"], "\n", desc, "\n->", path)
    if config.TELEGRAM_BOT_TOKEN and config.TELEGRAM_CHAT_ID:
        telegram.send_video(path, f"🧪 Test render: <b>{esc(pkg['title'])}</b>")
        telegram.send(f"<b>Description preview</b>\n\n{esc(desc)}")


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "poll"
    try:
        if cmd == "test":
            return cmd_test()
        if cmd == "aicheck":
            return cmd_aicheck()
        st = state.load()
        try:
            {"trends": cmd_trends, "poll": cmd_poll}[cmd](st)
        finally:
            state.save(st)
    except Exception as e:  # noqa: BLE001
        traceback.print_exc()
        msg = f"{type(e).__name__}: {e}"
        print(f"::error title=autopilot {cmd} failed::{msg[:900]}")  # shows on the GitHub run page
        try:
            telegram.send(f"❌ <b>{esc(cmd)} run failed</b>\n<code>{esc(msg[:900])}</code>")
        except Exception:  # noqa: BLE001
            pass
        sys.exit(1)


if __name__ == "__main__":
    main()
