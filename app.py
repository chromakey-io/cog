import logging
import uvicorn

from starlette.applications import Starlette

from starlette.staticfiles import StaticFiles
from starlette.routing import Route, Mount

from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

#from tortoise.contrib.starlette import register_tortoise
from tortoise import Tortoise

from auth.utils import AuthError, handle_auth_error

from auth.views import options
from subject.views import SubjectREST, subjects
from views import index, authorize, error, private

from settings import DEBUG
from debug import bootstrap

if DEBUG:
    logging.basicConfig(level=logging.DEBUG)

routes = [
    Route('/', endpoint=index, name="index"),
    Route('/authorize', endpoint=authorize, name="authorize"),
    Route('/private', endpoint=private, name="private"),
    Route('/options', endpoint=options, name="options"),

    Route('/subjects', endpoint=subjects, name="subjects"),
    Route('/subjects/{id:int}', endpoint=SubjectREST, name="subject"),

    Mount('/dist', StaticFiles(directory="/home/noah/cog/dist"), name="dist")
    ]

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['*'], expose_headers=['Content-Type', 'Authorization'])
    ]

exception_handlers = {
    AuthError: handle_auth_error
    }

async def init_orm() -> None:  # pylint: disable=W0612
    await Tortoise.init(db_url="sqlite://:memory:", modules={"models": ["subject.models"]})
    await Tortoise.generate_schemas()

async def close_orm() -> None:  # pylint: disable=W0612
    await Tortoise.close_connections()

if DEBUG:
    app = Starlette(routes=routes, middleware=middleware, exception_handlers=exception_handlers, on_startup=[init_orm, bootstrap], on_shutdown=[close_orm], debug=True)
else:
    app = Starlette(routes=routes, middleware=middleware, exception_handlers=exceptions_handlers)
    register_db()

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
