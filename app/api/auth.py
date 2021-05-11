from flask import Blueprint, request
from flask_login import current_user, login_user, logout_user, login_required
from app.forms.auth import LoginForm, RegistrationForm
from app.models import User, db

auth = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth.route('')
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}, 401

@auth.route('/login', methods=['POST'])
def login():
    #  Matches our JSON or FormData to automatically fill out out WTForm class
    form = LoginForm()
    #  grabs the csrf token from the request and puts it into the form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the current session and logs in
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    #  Matches our JSON or FormData to automatically fill out out WTForm class
    form = RegistrationForm()
      #  grabs the csrf token from the request and puts it into the form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    print("---------------------------------", form.data["password"])
    if form.validate_on_submit():
        # Create the user and login with the new user
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

# ToDo create login form, use login form, write post route


@auth.route('/unauthorized')
def unauthorized():
    return {'errors': ['Unauthorized']}, 401
