from tortoise import fields, models

class Subject(models.Model):
    id = fields.IntField(pk=True)
 
    research_id = fields.CharField(max_length=255)

    identity = fields.CharField(max_length=255)
    
    @property
    def name(self):
        return f"{self.identity}"

    def __str__(self) -> str:
        return f"Subject {self.id}: {self.name}"
