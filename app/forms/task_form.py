from flask_wtf import FlaskForm  # noqa
from wtforms import StringField  # noqa
from wtforms.validators import DataRequired, Email, ValidationError  # noqa
from app.models import User


class TaskForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    priority = StringField("priority", validators=[DataRequired()])
    due_date = StringField("due_date", validators=[DataRequired()])
