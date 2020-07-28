from settings import templates
from starlette.responses import JSONResponse, RedirectResponse
from auth.utils import requires_auth

from settings import AUTH_ISSUER, AUTH_AUDIENCE, AUTH_CLIENT_ID

def options(request):
    json = {'domain': AUTH_ISSUER,
            'audience': AUTH_AUDIENCE,
            'client_id': AUTH_CLIENT_ID,
            'redirect_uri': 'http://localhost:8000'
    }
    return JSONResponse(json)

@requires_auth
def private(request):
    #
    # get the user and do something with it
    # user = database.get(id = request.state.user['sub'])
    # 
    response = "Hello from a private endpoint! You need to be authenticated to see this."
    return JSONResponse({'message':response, 'user': request.state.user})

async def authorize(request):
    return RedirectResponse(url='https://' + AUTH_ISSUER + '/authorize')

async def error(request):
    """
    An example error. Switch the `debug` setting to see either tracebacks or 500 pages.
    """
    raise RuntimeError("Oh no")

async def index(request):
    template = "login.html"
    context = {"request": request}
    return templates.TemplateResponse(template, context)
