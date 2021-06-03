from flask import Blueprint, request
from flask_sqlalchemy.model import DefaultMeta
from app.models import Task, User, db
from app.forms import TaskForm

task = Blueprint('task', __name__)

@task.route('/add', methods=['POST'])
def add_task():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Task()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    return('Invalid Information')
