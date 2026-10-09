# Content plan

`plan.csv` is the sheet: **one row = one video**. Every morning at 9 AM ET a Claude scheduled task researches what's
breaking out (YouTube outliers in `viral_signals.json`, ranked by how far each Short beat its own channel), then adds
fully scripted rows using the youtube-agent-skill workflow (`/yt-viral`, `/yt-script`, `/yt-package`, `/yt-seo`).

At ~10:17 AM ET the bot sends you the Ready rows in Telegram (marked 📋). Reply with the numbers to make them.
`status.json` tracks each row: Ready → Sent → Making → Preview → Published (or Not picked / Skipped / Failed).
Your PC copy is the "Content Plan" tab in `Shorts Library.xlsx`.

Rules for rows: never repeat an earlier idea (check plan.csv, ../archive/ideas.json, ../archive/videos.json),
family-friendly and advertiser-safe, facts with sources, ~55-65 seconds of narration (about 150 words).
