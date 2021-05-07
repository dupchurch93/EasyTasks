from flask_wtf import FlaskForm  # noqa
from wtforms import StringField  # noqa
from wtforms.validators import DataRequired, Email, ValidationError  # noqa
from app.models import User
import re


def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")

# check if the password contains at least one uppercase, one lower case, and one special character with length > 6
def password_format(form, field):
    password = field.data
    pattern = "^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$"
    result = re.findall(pattern, password)
    if not result:
        raise ValidationError("Password must contain at least 1 number, one lower case letter, one upper case letter, and one special character.")

class RegistrationForm(FlaskForm):
    username = StringField("username", validators=[DataRequired()])
    email = StringField("email", validators=[DataRequired(), user_exists])
    password = StringField("password", validators=[DataRequired(), password_format])
