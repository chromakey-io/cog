from tortoise import fields, models
from subject.models import Subject as Subject

class Trial(models.Model):
    id = fields.IntField(pk=True)
 
    subject_id: fields.ForeignKeyRelation[Subject] = fields.ForeignKeyField("models.Subject", related_name="trials")

    created_at = fields.DatetimeField(auto_now=False, auto_now_add=False)

    data = fields.JSONField()

    trial_name = fields.TextField()
    
    @property
    def name(self):
        return f"{self.trial_name}"

    def __str__(self) -> str:
        return f"Trial {self.id}: {self.name}"