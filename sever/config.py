import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    """Clase usada para la configuracion de la aplicacion"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'misecreto'







