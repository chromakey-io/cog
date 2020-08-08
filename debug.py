from subject.models import Subject
from settings import RESEARCH_ID

async def bootstrap():
    """ research_id needs to match YOUR associated authentication key """

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Fred Flintstone"
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Barney Rubble"
    await sub.save()

    sub = Subject()
    sub.research_id = RESEARCH_ID
    sub.identity = "Betty Boop"
    await sub.save()
