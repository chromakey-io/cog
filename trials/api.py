import json

from starlette.responses import JSONResponse
from starlette.requests import Request

from trials.models import TrialModel as Trials
from starlette.endpoints import HTTPEndpoint

from starlette.authentication import requires

class TrialsEndpoint(HTTPEndpoint):

    # get an existing object
    #@requires('authenticated')
    async def get(self, request: Request):
        id = request.path_params['id']
        subject_id = request.path_params['subject_id']

        trial = await Trials.filter(subject_id, id = id).first()
        return JSONResponse(json.dumps(trial))

    # create a brand new object
    #@requires('authenticated')
    async def post(self, request: Request):
        data = await request.json()
        # because you set the created at auto-add-now on the model, 
        # you don't need to do anything here when instantiating a new Trial
        # though if you do, that's a MAJOR bug that we need to report/fix

        trial = Trials(subject_id=data['subject_id'], trial_name=data['trial_name'])
        await trial.save()
        return JSONResponse({'id': trial.id, 'subject_id': trial.subject_id, 'created_at': trial.created_at, 'data': trial.data, 'name': trial.name})

    # Update an existing object by ID
    #@requires('authenticated')
    async def put(self, request: Request):
        id = request.path_params['id']
        data = json.loads(request.body)
        trial = await Trials.filter(id = id).update(**data)
        return JSONResponse(json.dumps(trial))


    # Delete an existing object by ID
    #@requires('authenticated')
    async def delete(self, request: Request):
        id = request.path_params['id']
        trial = await Trials.filter(id = id).delete()
        return JSONResponse(json.dumps(trial))
