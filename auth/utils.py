import httpx

from functools import wraps
from urllib.request import urlopen

from starlette.responses import JSONResponse
from settings import AUTH_ISSUER, AUTH_AUDIENCE, AUTH_ALGORITHMS

from jose import jwt

try:
    import ujson as json
except ImportError:
    import json

"""async def get_json_keys():
    async with httpx.AsyncClient() as client:
        key_data = await client.get("https://{}/.well-known/jwks.json".format(AUTH_ISSUER))
        keys = await key_data.aread()
        return json.loads(keys)
"""
def get_json_keys():
    key_data = httpx.get("https://{}/.well-known/jwks.json".format(AUTH_ISSUER))
    keys = key_data.read()
    return json.loads(keys)

JWKS = get_json_keys()

class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code

def handle_auth_error(request, exc):
    response = JSONResponse(exc.error)
    response.status_code = exc.status_code
    return response

# Format error response and append status code
def get_token_auth_header(request):
    """Obtains the Access Token from the Authorization Header
    """
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise AuthError({"code": "authorization_header_missing",
                        "description":
                            "Authorization header is expected"}, 401)
    parts = auth.split()
    if parts[0].lower() != "bearer:":
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must start with"
                            " Bearer"}, 401)
    elif len(parts) == 1:
        raise AuthError({"code": "invalid_header",
                        "description": "Token not found"}, 401)
    elif len(parts) > 2:
        raise AuthError({"code": "invalid_header",
                        "description":
                            "Authorization header must be"
                            " Bearer token"}, 401)

    token = parts[1]
    return token

def authenticated(func, scope=None):
    """Determines if the Access Token is valid
    """
    @wraps(func)
    async def decorated(*args, **kwargs):
        request = args[0]
        token = get_token_auth_header(request)

        if scope: permissions(scope, token)

        unverified_header = jwt.get_unverified_header(token)
        rsa_key = {}
        for key in JWKS["keys"]:
            if key["kid"] == unverified_header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=AUTH_ALGORITHMS,
                    audience=AUTH_AUDIENCE,
                    issuer="https://{}/".format(AUTH_ISSUER)
                )
            except jwt.ExpiredSignatureError:
                raise AuthError({"code": "token_expired",
                                "description": "token is expired"}, 401)
            except jwt.JWTClaimsError:
                raise AuthError({"code": "invalid_claims",
                                "description":
                                    "incorrect claims,"
                                    "please check the audience and issuer"}, 401)
            except Exception:
                raise AuthError({"code": "invalid_header",
                                "description":
                                    "Unable to parse authentication"
                                    " token."}, 401)
            #create local user instance
            request.state.user = payload
            return await func(*args, **kwargs)

        raise AuthError({"code": "invalid_header",
                        "description": "Unable to find appropriate key"}, 401)
    return decorated

def permissions(scope, token):
    """Determines if the required scope is present in the Access Token
    Args:
        scope (str): The scope required to access the resource
    """
    unverified_claims = jwt.get_unverified_claims(token)
    if unverified_claims.get("scope"):
        token_scopes = unverified_claims["scope"].split()
        for token_scope in token_scopes:
            if token_scope == scope:
                return

    raise AuthError({"code": "invalid_scope",
                    "description": "User does not have required permissions"})
