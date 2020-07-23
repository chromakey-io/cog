from settings import templates
from starlette.responses import JSONResponse, RedirectResponse
from auth.utils import requires_auth

from settings import AUTH_ISSUER, AUTH_AUDIENCE, AUTH_CLIENT_ID

@requires_auth
def private(request):
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

async def config(request):
    credentials = {
        'domain': AUTH_ISSUER,
        'client_id': AUTH_CLIENT_ID,
        'audience': AUTH_AUDIENCE
    }
    return JSONResponse(credentials)
