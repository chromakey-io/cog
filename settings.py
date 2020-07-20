from starlette.config import Config
from starlette.datastructures import CommaSeparatedStrings
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory='templates')

config = Config(".env")

DEBUG = config('DEBUG', cast=bool, default=True)

AUTH_ISSUER = config('AUTH_ISSUER', cast=str)
AUTH_AUDIENCE = config('AUTH_AUDIENCE', cast=str)
AUTH_ALGORITHMS = config('AUTH_ALGORITHMS', cast=CommaSeparatedStrings)
