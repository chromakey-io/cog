from tortoise import fields, models

class Subject(models.Model):
    id = fields.IntField(pk=True)
 
    research_id = fields.CharField(max_length=255)

    identifier = fields.CharField(max_length=255)

    trials: fields.ReverseRelation['Trial']
    
    @property
    def name(self):
        return f"{self.identifier}"

    def __str__(self) -> str:
        return f"Subject {self.id}: {self.name}"
