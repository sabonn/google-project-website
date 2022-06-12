from flask import Flask, redirect, request, url_for
import socket
import json

hostName = socket.gethostname()
hostName = socket.gethostbyname(hostName)

t = []

obj = {'games': []}

server = Flask(__name__)

@server.route('/', methods=['POST', 'GET'])
def ma():
    global obj
    if request.method == 'POST':
        data = request.get_data().decode()
        obj = json.loads(data)
        print(obj)

        return redirect(url_for('ma'))
    elif request.method == 'GET':
        print(obj)
        return obj

server.run(port=9999, host=hostName)