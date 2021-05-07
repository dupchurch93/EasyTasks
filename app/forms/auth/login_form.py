from flask_wtf import FlaskForm  # noqa
from wtforms import StringField  # noqa
from wtforms.validators import DataRequired, Email, ValidationError  # noqa
from app.models import User

def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found.")

def password_matches(form, field):
    #  pass the password and form as parameters
    password = field.data
    email = form.data["email"]
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found.")
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")

class LoginForm(FlaskForm):
    email = StringField("email", validators=[DataRequired(), user_exists])
    password = StringField("password", validators=[DataRequired(), password_matches])
