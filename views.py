from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory='templates')

@app.route('/error')
async def error(request):
    """
    An example error. Switch the `debug` setting to see either tracebacks or 500 pages.
    """
    raise RuntimeError("Oh no")

@app.route('/')
async def index(request):
    template = "index.html"
    context = {"request": request}
    return templates.TemplateResponse(template, context)
