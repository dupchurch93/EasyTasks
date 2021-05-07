from flask import Blueprint
from flask_login import current_user, login_user, logout_user, login_required

auth = Blueprint('auth', __name__)

@auth.route('')
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}, 401

@auth.route('/login', methods=['POST'])
def login():
    pass
# ToDo create login form, use login form, write post route


@auth.route('/unauthorized')
def unauthorized():
    return {'errors': ['Unauthorized']}, 401
