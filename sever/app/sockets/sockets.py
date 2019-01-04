import json
from app import socketio, db
from flask_socketio import emit, join_room
from app.models.conversations import Conversations


@socketio.on('test')
def handle_test(message):
    print(type(message))
    print(message['hola'])
    #print('json recivido' +  variable + ' none = ' + str(none))
    emit('test', message)


@socketio.on('messages', namespace="/")
def handle_messages(messages, *args):
    conversation = Conversations(de=messages['de'], para=messages['para'], mensaje=messages['mensaje'] )
    db.session.add(conversation)
    db.session.commit()
    room = '1'
    join_room(room)
    emit('messages', messages, room=room)

