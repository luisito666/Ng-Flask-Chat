from flask import Request, Response, jsonify
from app import db
from app.api import api
from app.models.conversations import Conversations


@api.route('/conversations/<username>', methods=['GET'])
def conversations(username):
    conver = db.session.query(Conversations).filter_by(de=username)
    return jsonify([i.serialize for i in conver ])

