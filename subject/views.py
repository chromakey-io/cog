import json

from starlette.responses import JSONResponse
from starlette.requests import Request

from subject.models import Subject as Subject
from starlette.endpoints import HTTPEndpoint

from auth.utils import authenticated

async def subjects(request: Request):
    results = Subject.all()
    return JSONResponse(results)

class SubjectREST(HTTPEndpoint):
    @authenticated
    async def get(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).first()
        return JSONResponse(json.dumps(subject))

    @authenticated
    async def post(self, request: Request):
        data = json.loads(request.body)
        subject = await Subject(**data).save()
        return JSONResponse(json.dumps(subject))

    @authenticated
    async def put(self, request: Request):
        id = request.path_params['id']
        data = json.loads(request.body)
        subject = await Subject.filter(id = id).update(**data)
        return JSONResponse(json.dumps(subject))
    
    @authenticated
    async def delete(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).delete()
        return JSONResponse(json.dumps(subject))
