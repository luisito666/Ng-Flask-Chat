from collections import OrderedDict
from app import db


class Conversations(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    de = db.Column(db.String(20))
    para = db.Column(db.String(20))
    mensaje = db.Column(db.Text())
    modified_at = db.Column(db.DateTime)

    def __repr__ (self):
        return '<Conversation {}>'.format(self.de)

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'id'         : self.id,
            'de'         : self.de,
            'para'       : self.para,
            'mensaje'    : self.mensaje
        }