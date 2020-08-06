from starlette.responses import JSONResponse
from starlette.requests import Request

from settings import AUTH_ISSUER, AUTH_AUDIENCE, AUTH_CLIENT_ID

def options(request: Request):
    json = {'domain': AUTH_ISSUER,
            'audience': AUTH_AUDIENCE,
            'client_id': AUTH_CLIENT_ID,
            'redirect_uri': 'http://localhost:8000'
    }
    return JSONResponse(json)

"""
from auth.utils import authenticated
from auth.utils import AuthError

# This doesn't need authentication
def public():
    response = "Hello from a public endpoint! You don't need to be authenticated to see this."
    return JSONResponse({'message':response})

# This needs authentication
@authenticated
def private():
    response = "Hello from a private endpoint! You need to be authenticated to see this."
    return JSONResponse({'message':response})

# This needs authorization
@APP.route("/api/private-scoped")
@authenticated("read:messages")
def private_scoped():
    response = "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this."
    return JSONResponse({'message':response})

    raise AuthError({
        "code": "Unauthorized",
        "description": "You don't have access to this resource"
    }, 403)
"""
