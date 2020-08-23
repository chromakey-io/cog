from starlette.staticfiles import StaticFiles
from starlette.routing import Route, Mount

from auth.views import options

from subjects.api import SubjectsEndpoint
from subjects.views import subjects

from trials.api import TrialsEndpoint
from trials.views import trials

from views import index, authorize, error, private

from debug import bootstrap

Routers = [
    Route('/', endpoint=index, name="index"),
    Route('/authorize', endpoint=authorize, name="authorize"),
    Route('/private', endpoint=private, name="private"),
    Route('/options', endpoint=options, name="options"),

    Route('/subjects', endpoint=subjects, name="subjects"),

    Route('/subjects', endpoint=SubjectsEndpoint, methods=["POST"], name="add-subjects"),
    Route('/subjects/{id:int}', endpoint=SubjectsEndpoint, methods=["GET", "PUT", "DELETE"], name="subjects"),

    Route('/trials', endpoint=TrialsEndpoint, methods=["POST"], name="add-trial"),
    Route('/subjects/{id:int}', endpoint=TrialsEndpoint, methods=["GET", "PUT", "DELETE"], name="trials"),

    Route('/bootstrap', endpoint=bootstrap, methods=["GET"], name="bootstrap-data"),

    Mount('/dist', StaticFiles(directory="./dist"), name="dist")
    ]
