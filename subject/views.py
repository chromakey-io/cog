import json

from starlette.responses import JSONResponse
from starlette.requests import Request

from subject.models import Subject as Subject
from starlette.endpoints import HTTPEndpoint

from starlette.authentication import requires

@requires('authenticated')
async def subjects(request: Request):
    results = await Subject.filter(research_id = request.user.identity)
    data = []
    for result in results:
        data.append({
            'id':result.id,
            'research_id': result.research_id,
            'identity': result.identity,
            'age': result.age
        })
    return JSONResponse(data)

class SubjectREST(HTTPEndpoint):
    @requires('authenticated')
    async def get(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).first()
        return JSONResponse({'id': subject.id, 'research_id': subject.research_id, 'identity': subject.identity, 'age': subject.age})
    
    @requires('authenticated')
    async def post(self, request: Request):
        data = await request.json()
        subject = Subject(research_id=request.user.identity, identity=data['identity'], birthdate=data['birthdate'])
        await subject.save()
        return JSONResponse({'id': subject.id, 'research_id': subject.research_id, 'identity': subject.identity, 'age': subject.age})

    @requires('authenticated')
    async def put(self, request: Request):
        id = request.path_params['id']
        data = json.loads(request.body)
        subject = await Subject.filter(id = id).update(**data)
        return JSONResponse(json.dumps(subject))
    
    @requires('authenticated')
    async def delete(self, request: Request):
        id = request.path_params['id']
        subject = await Subject.filter(id = id).delete()
        return JSONResponse(json.dumps(subject))
