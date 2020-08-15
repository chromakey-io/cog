from subject.models import Subject
from trial.models import Trial
from settings import RESEARCH_ID

async def bootstrap():
    """ research_id needs to match YOUR associated authentication key """

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identifier = "Fred Flintstone"
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identifier = "Barney Rubble"
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identifier = "Betty Boop"
    await sub.save()

    tri = Trial()
    tri.subject = "Betty Boop"
    tri.trial_name = "Professor X"
    await tri.save()

    