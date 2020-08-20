import datetime

from tortoise import fields, models

class Subject(models.Model):
    id = fields.IntField(pk=True)
 
    research_id = fields.CharField(max_length=255)

    identity = fields.CharField(max_length=255)
    birthdate = fields.DateField()
    identifier = fields.CharField(max_length=255)

    trials: fields.ReverseRelation['Trial']
    
    active = fields.BooleanField(default=True)
    created_at = fields.DatetimeField(auto_now_add=True)

    @property
    def name(self):
        return f"{self.identity}"

    @property
    def age(self):
        today = datetime.date.today()
        delta = today.year - self.birthdate.year

        if today > datetime.date(month=self.birthdate.month, day=self.birthdate.day, year=today.year):
            delta = delta - 1

        return delta

    def __str__(self) -> str:
        return f"Subject {self.id}: {self.name}"
