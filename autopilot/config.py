"""All settings come from environment variables (GitHub Secrets / Variables)."""
import os


def env(name, default=None, cast=str):
    val = os.getenv(name)
    if val is None or val == "":
        return default
    if cast is bool:
        return val.strip().lower() in ("1", "true", "yes", "on")
    return cast(val)


# --- Required secrets ---
TELEGRAM_BOT_TOKEN = env("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = env("TELEGRAM_CHAT_ID")          # your personal chat id
GEMINI_API_KEY = env("GEMINI_API_KEY")
YOUTUBE_API_KEY = env("YOUTUBE_API_KEY")             # for reading trends
PEXELS_API_KEY = env("PEXELS_API_KEY")               # free stock video/photos (optional)
PIXABAY_API_KEY = env("PIXABAY_API_KEY")             # free stock video/photos (optional)

# --- Publishing (any you leave blank is skipped) ---
YT_CLIENT_ID = env("YT_CLIENT_ID")
YT_CLIENT_SECRET = env("YT_CLIENT_SECRET")
YT_REFRESH_TOKEN = env("YT_REFRESH_TOKEN")
YT_PRIVACY = env("YT_PRIVACY", "private")            # set Variable YT_PRIVACY=public after Google approves your API audit

IG_USER_ID = env("IG_USER_ID")
IG_ACCESS_TOKEN = env("IG_ACCESS_TOKEN")             # long-lived token
IG_GRAPH_HOST = env("IG_GRAPH_HOST", "graph.facebook.com")
IG_API_VERSION = env("IG_API_VERSION", "v23.0")

TIKTOK_ACCESS_TOKEN = env("TIKTOK_ACCESS_TOKEN")
TIKTOK_REFRESH_TOKEN = env("TIKTOK_REFRESH_TOKEN")
TIKTOK_CLIENT_KEY = env("TIKTOK_CLIENT_KEY")
TIKTOK_CLIENT_SECRET = env("TIKTOK_CLIENT_SECRET")
TIKTOK_PRIVACY = env("TIKTOK_PRIVACY", "SELF_ONLY")  # unaudited apps may only post SELF_ONLY

# --- Optional AI images (free tier) instead of stock footage ---
CF_ACCOUNT_ID = env("CF_ACCOUNT_ID")
CF_API_TOKEN = env("CF_API_TOKEN")

# --- Behaviour (GitHub Variables) ---
NICHE = env("NICHE", "general interest: science, tech, nature, food, travel, sports highlights, how-to")
REGION = env("REGION", "US")
LANGUAGE = env("LANGUAGE", "en")
GEMINI_MODEL = env("GEMINI_MODEL")                      # blank = auto-pick newest free Flash model
VOICE = env("VOICE", "en-US-AndrewMultilingualNeural")
VISUALS = env("VISUALS", "pexels")                   # pexels | ai (Cloudflare) | mixed
TOPICS_PER_DAY = env("TOPICS_PER_DAY", 5, int)
MAX_VIDEOS_PER_DAY = env("MAX_VIDEOS_PER_DAY", 3, int)
AUTO_PICK_COUNT = env("AUTO_PICK_COUNT", 2, int)     # used if you don't reply
SELECT_TIMEOUT_HOURS = env("SELECT_TIMEOUT_HOURS", 3, float)
REQUIRE_APPROVAL = env("REQUIRE_APPROVAL", True, bool)
APPROVE_TIMEOUT_HOURS = env("APPROVE_TIMEOUT_HOURS", 2, float)  # auto-publish if you stay silent
TARGET_SECONDS = env("TARGET_SECONDS", 45, int)
POLL_MINUTES = env("POLL_MINUTES", 12, float)        # how long each run stays online answering Telegram

WIDTH, HEIGHT, FPS = 1080, 1920, 30
STATE_FILE = env("STATE_FILE", "state/state.json")
WORK_DIR = env("WORK_DIR", "work")
GITHUB_REPOSITORY = env("GITHUB_REPOSITORY")         # set automatically in Actions
