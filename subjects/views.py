import json

from starlette.responses import JSONResponse
from starlette.requests import Request

from subjects.models import SubjectModel
from starlette.endpoints import HTTPEndpoint

from starlette.authentication import requires

#@requires('authenticated')
async def subjects(request: Request):
    results = await SubjectModel.filter(research_id = request.user.identity)
    data = []
    for result in results:
        data.append({
            'id':result.id,
            'research_id': result.research_id,
            'identity': result.identity,
            'age': result.age
        })
    return JSONResponse(data)
