import datetime
import orjson as json

from subjects.models import SubjectModel as Subject
from trials.models import TrialModel as Trial

from starlette.authentication import requires
from starlette.responses import JSONResponse


@requires("authenticated")
async def bootstrap(request):
    """ research_id needs to match YOUR associated authentication key """

    RESEARCH_ID = request.user.identity

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Fred Flintstone"
    sub.birthdate = datetime.date(month=9, day=30, year=1960)
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Barney Rubble"
    sub.birthdate = datetime.date(month=9, day=30, year=1960)
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Betty Boop"
    sub.birthdate = datetime.date(month=1, day=1, year=1930)
    await sub.save()

    print(sub)

    tri = Trial()
    tri.name = "Trail Making Task: 1"
    tri.subject = sub
    tri.data = json.dumps({"hello": "world"})
    await tri.save()

    return JSONResponse({"message": "succss"})
