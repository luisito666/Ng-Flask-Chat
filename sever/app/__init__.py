import os
from flask import Flask
from config import Config
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

socketio = SocketIO()

# Set flask development env
os.environ['FLASK_ENV'] = 'development'

def create_app( app ):
    """Funcion encarga de configurar la aplicacion de flask que se esta creando
    """
    # import  Blueprint
    from app.sockets import socks as socks_blueprint
    from app.api import api as api_blueprint

    # register Blueprint
    app.register_blueprint(socks_blueprint)
    app.register_blueprint(api_blueprint, url_prefix='/api/v1')

    # inicializar SocketIO
    socketio.init_app(app)

    return app


# Config application
app = Flask(__name__)
app.config.from_object(Config)

# Config databases
db = SQLAlchemy(app=app)

# config parameters of the app
app = create_app(app)

CORS(app)

# Config Migrations
migrate = Migrate(app=app, db=db)

from app import models
