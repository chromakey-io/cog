import httpx

from starlette.config import Config
from starlette.datastructures import CommaSeparatedStrings
from starlette.templating import Jinja2Templates

try:
    import orjson as json
except ImportError:
    import json

templates = Jinja2Templates(directory="templates")

config = Config(".env")

DEBUG = config("DEBUG", cast=bool, default=True)

AUTH_CLIENT_ID = config("AUTH_CLIENT_ID", cast=str)
AUTH_ISSUER = config("AUTH_ISSUER", cast=str)
AUTH_AUDIENCE = config("AUTH_AUDIENCE", cast=str)
AUTH_ALGORITHMS = config("AUTH_ALGORITHMS", cast=CommaSeparatedStrings)


def get_json_keys():
    key_data = httpx.get("https://{}/.well-known/jwks.json".format(AUTH_ISSUER))
    keys = key_data.read()
    return json.loads(keys)


JWKS = get_json_keys()
