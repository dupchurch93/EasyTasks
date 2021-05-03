import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

# ToDo will add in later
# from .seeds import seed_commands

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'
