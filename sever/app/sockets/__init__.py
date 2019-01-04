from flask import Blueprint

socks = Blueprint('socks', __name__)

from . import sockets
