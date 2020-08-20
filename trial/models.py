from tortoise import fields, models
from subject.models import Subject as Subject

class Trial(models.Model):
    id = fields.IntField(pk=True)

    name = fields.TextField()
 
    subject: fields.ForeignKeyRelation[Subject] = fields.ForeignKeyField("models.Subject", required=True, related_name="trials")

    created_at = fields.DatetimeField(auto_now_add=False)

    data = fields.JSONField()

    """ this is useful for when you have two fields that compose a common name
        ie:  first_name and last_name 

        then you use a property field to construct the common name, while still 
        having access to the seperated first/last names in the DB

    @property
    def name(self):
        return '{self.name}'
    """

    def __str__(self) -> str:
        return f"Trial {self.id}: {self.name}"
