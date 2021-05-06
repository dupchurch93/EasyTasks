from .db import db

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(1000), nullable = False)
  description = db.Column(db.String, nullable = True)
  tasks = db.relationship("Task", back_populates="project")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "description": self.description
    }
