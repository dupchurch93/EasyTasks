import os
from .config import Config
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

# ToDo will add in later
# from .seeds import seed_commands

# Initialize the Flask application
app = Flask(__name__)

# Login object created to handle user auth cookies
login = LoginManager(app)
login.login_view = 'auth.unauthorized'

# Loads the user when returning current user
# @login.user_loader
# def load_user(id):
#     return User.query.get(int(id))

# Import configuration variables
app.config.from_object(Config)

# Application Security
CORS(app)

# Convert traffic in production to HTTPS
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)

# Generate csrf token
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response

# Connect the Flask app to the React app
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
# @app.route("/")
# def hello_world():
#     return "hello world"
