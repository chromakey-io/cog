from settings import templates
from starlette.responses import RedirectResponse

from settings import AUTH_ISSUER

async def authorize(request):
    return RedirectResponse(url='https://' + AUTH_ISSUER + '/authorize')

async def error(request):
    """
    An example error. Switch the `debug` setting to see either tracebacks or 500 pages.
    """
    raise RuntimeError("Oh no")

async def index(request):
    template = "index.html"
    context = {"request": request}
    return templates.TemplateResponse(template, context)
