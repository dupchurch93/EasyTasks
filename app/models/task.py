from .db import db

class Task(db.Model):
  __tablename__ = 'tasks'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable = True)
  name = db.Column(db.String(1000), nullable = False)
  description = db.Column(db.String, nullable = True)
  priority = db.Column(db.String(255), nullable = False)
  due_date = db.Column(db.Date, nullable = True)
  user = db.relationship("User", back_populates="tasks")
  project = db.relationship("Project", back_populates="tasks")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "project_id": self.project_id,
      "name": self.name,
      "description": self.description,
      "priority": self.priority,
      "due_date": self.due_date,
    }
