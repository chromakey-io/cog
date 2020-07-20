from settings import templates

async def error(request):
    """
    An example error. Switch the `debug` setting to see either tracebacks or 500 pages.
    """
    raise RuntimeError("Oh no")

async def index(request):
    template = "index.html"
    context = {"request": request}
    return templates.TemplateResponse(template, context)
