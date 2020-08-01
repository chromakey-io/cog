from subject.models import Subject

async def bootstrap():
    sub = Subject()
    sub.research_id = 'auth0|5f18d06fcfcc010013c0c3f7'
    sub.first_name = "Fred"
    sub.last_name = "Flintstone"
    await sub.save()

    sub = Subject()
    sub.research_id = 'auth0|5f18d06fcfcc010013c0c3f7'
    sub.first_name = "Barney"
    sub.last_name = "Rubble"
    await sub.save()

    sub = Subject()
    sub.research_id = 'auth0|5f18d06fcfcc010013c0c3f7'
    sub.first_name = "Betty"
    sub.last_name = "Boop"
    await sub.save()
