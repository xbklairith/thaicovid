from os import getenv
import base64
import json
from thaicovid_api.shared.logger import logger

GOOGLE_SERVICE_KEY_JSON_BASE64 = getenv("GOOGLE_SERVICE_KEY_JSON_BASE64")

if not GOOGLE_SERVICE_KEY_JSON_BASE64:
    logger.warning("GOOGLE_SERVICE_KEY_JSON_BASE64 NOT SET")

GOOGLE_SERVICE_KEY_JSON = base64.b64decode(GOOGLE_SERVICE_KEY_JSON_BASE64).decode(
    "utf-8"
)

GOOGLE_SERVICE_KEY_DICT = json.loads(GOOGLE_SERVICE_KEY_JSON)
