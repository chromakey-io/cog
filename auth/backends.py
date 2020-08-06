from settings import AUTH_ISSUER, AUTH_AUDIENCE, AUTH_ALGORITHMS, JWKS

from jose import jwt

from starlette.requests import Request

from starlette.authentication import (
    AuthenticationBackend, AuthenticationError, UnauthenticatedUser,
    AuthCredentials
)

from starlette.responses import JSONResponse

from auth.models import TokenUser

def auth_error_handler(request: Request, exc: Exception):
    return JSONResponse({"error": str(exc)}, status_code=401)

class Auth0Backend(AuthenticationBackend):
    async def get_scope(self, token):
        """Determines if the required scope is present in the Access Token
        Args:
            token (str): Authorization token header
        """
        unverified_claims = jwt.get_unverified_claims(token)
        if unverified_claims.get("scope"):
            return unverified_claims["scope"].split()

    async def get_token_auth_header(self, request):
        """Obtains the Access Token from the Authorization Header
        Args:
            request (Request)
        """
        auth = request.headers.get("Authorization", None)
        if not auth:
            return None

        parts = auth.split()
        if parts[0].lower() != "bearer:":
            raise AuthenticationError({"code": "invalid_header",
                            "description":
                                "Authorization header must start with"
                                " Bearer"})
        elif len(parts) == 1:
            raise AuthenticationError({"code": "invalid_header",
                            "description": "Token not found"})
        elif len(parts) > 2:
            raise AuthenticationError({"code": "invalid_header",
                            "description":
                                "Authorization header must be"
                                " Bearer token"})

        token = parts[1]
        return token

    async def authenticate(self, request):
        token = await self.get_token_auth_header(request)

        if token:
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
                        algorithms = AUTH_ALGORITHMS,
                        audience = AUTH_AUDIENCE,
                        issuer = "https://{}/".format(AUTH_ISSUER)
                    )
                except jwt.ExpiredSignatureError:
                    raise AuthenticationError({"code": "token_expired",
                                    "description": "token is expired"})
                except jwt.JWTClaimsError:
                    raise AuthenticationError({"code": "invalid_claims",
                                    "description":
                                        "incorrect claims,"
                                        "please check the audience and issuer"})
                except Exception:
                    raise AuthenticationError({"code": "invalid_header",
                                    "description":
                                        "Unable to parse authentication"
                                        " token."})

                scope =  await self.get_scope(token)
                scope.append('authenticated')
                return AuthCredentials(scope), TokenUser(payload)

            raise AuthenticationError({"code": "invalid_header",
                            "description": "Unable to find appropriate key"})
        
        return AuthCredentials(), UnauthenticatedUser()
