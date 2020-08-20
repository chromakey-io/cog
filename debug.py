import datetime

from subject.models import Subject
from trial.models import Trial
from settings import RESEARCH_ID

async def bootstrap():
    """ research_id needs to match YOUR associated authentication key """

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

    tri = Trial()
    tri.subject = "Betty Boop"
    tri.trial_name = "Professor X"
    await tri.save()

    