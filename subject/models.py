from tortoise import fields, models

class Subject(models.Model):
    id = fields.IntField(pk=True)

    first_name = fields.CharField(max_length=255)
    last_name = fields.CharField(max_length=255)
    
    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self) -> str:
        return f"Subject {self.id}: {self.name}"
