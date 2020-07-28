import uvicorn
from starlette.applications import Starlette

from starlette.staticfiles import StaticFiles
from starlette.routing import Route, Mount

from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from auth.utils import AuthError, handle_auth_error
from views import index, authorize, error, private

from settings import DEBUG

routes = [
    Route('/', endpoint=index, name="index"),
    Route('/authorize', endpoint=authorize, name="authorize"),
    Route('/private', endpoint=private, name="private"),

    Mount('/dist', StaticFiles(directory="/home/noah/cog/dist"), name="dist")
    ]

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['*'], expose_headers=['Content-Type', 'Authorization'])
    ]

exception_handlers = {
    AuthError: handle_auth_error
    }

app = Starlette(routes=routes, middleware=middleware, exception_handlers=exception_handlers, debug=True)

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
