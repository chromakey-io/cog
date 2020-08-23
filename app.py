import logging
import uvicorn

from settings import DEBUG

from starlette.applications import Starlette

from starlette.middleware import Middleware
from starlette.middleware.authentication import AuthenticationMiddleware
from starlette.middleware.cors import CORSMiddleware

from tortoise import Tortoise

from auth.backends import Auth0Backend, auth_error_handler

from routes import Routers

if DEBUG:
    logging.basicConfig(level=logging.DEBUG)

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_headers=["*"],
        expose_headers=["Content-Type", "Authorization"],
    ),
    Middleware(
        AuthenticationMiddleware, backend=Auth0Backend(), on_error=auth_error_handler
    ),
]


async def init_orm() -> None:
    await Tortoise.init(
        db_url="sqlite://:memory:",
        modules={"models": ["subjects.models", "trials.models"]},
    )
    await Tortoise.generate_schemas()


async def close_orm() -> None:  # pylint: disable=W0612
    await Tortoise.close_connections()


app = Starlette(
    routes=Routers,
    middleware=middleware,
    on_startup=[init_orm],
    on_shutdown=[close_orm],
    debug=True,
)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
