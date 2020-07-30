import json

from starlette.responses import JSONResponse
from starlette.requests import Request

from subject.models import Subject as Subject
from starlette.endpoints import HTTPEndpoint

async def subjects(request: Request):
    results = await Subject.all()
    return JSONResponse(json.dumps(results))

class SubjectREST(HTTPEndpoint):
    async def get(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).first()
        return JSONResponse(json.dumps(subject))

    async def post(self, request: Request):
        data = json.loads(request.body)
        subject = await Subject(**data).save()
        return JSONResponse(json.dumps(subject))

    async def put(self, request: Request):
        id = request.path_params['id']
        data = json.loads(request.body)
        subject = await Subject.filter(id = id).update(**data)
        return JSONResponse(json.dumps(subject))

    async def delete(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).delete()
        return JSONResponse(json.dumps(subject))
