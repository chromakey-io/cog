from tortoise import fields, models
from subjects.models import SubjectModel


class TrialModel(models.Model):
    id = fields.IntField(pk=True)

    name = fields.CharField(default="Trail Making Task", max_length=255)

    subject: fields.ForeignKeyRelation[SubjectModel] = fields.ForeignKeyField(
        "models.SubjectModel", related_name="trials", required=True
    )

    created_at = fields.DatetimeField(auto_now_add=True)

    data = fields.JSONField()

    """ this is useful for when you have two fields that compose a common name
        ie:  first_name and last_name 

        then you use a property field to construct the common name, while still 
        having access to the seperated first/last names in the DB

        So having a name @property is redundant :/

    @property
    def name(self):
        return '{self.name}'
    """

    def __str__(self) -> str:
        return f"Trial {self.id}: {self.name}"
