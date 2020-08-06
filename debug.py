from subject.models import Subject

async def bootstrap():
    sub = Subject()
    sub.research_id = '5f18d06fcfcc010013c0c3f7'
    sub.identifier = "Fred Flintstone"
    await sub.save()

    sub = Subject()
    sub.research_id = '5f18d06fcfcc010013c0c3f7'
    sub.identifier = "Barney Rubble"
    await sub.save()

    sub = Subject()
    sub.research_id = '5f18d06fcfcc010013c0c3f7'
    sub.identifier = "Betty Boop"
    await sub.save()
