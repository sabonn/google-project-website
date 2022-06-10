from flask import Flask, redirect, url_for, request
import socket
import json
hostName = socket.gethostname()
hostName = socket.gethostbyname(hostName)
t = []
output = ''
obj = {'games': []}
output += '<form method="POST">'
output += '<input name="d" type="text" placeholder="data">'
output += '<input type="submit" value="enter1">'

server = Flask(__name__)

@server.route('/', methods = ['POST', 'GET'])
def ma():
    global obj
    if request.method == 'POST':
       data = request.get_data()
       data.decode()
       obj = json.loads(data)
       print(obj)

       return redirect(url_for('ma'))
    elif request.method == 'GET':
        print(output)
        return output



@server.route('/data_change', methods=['GET', 'POST'])
def data_handler():
    global obj
    if request.method == 'GET':
        print(obj)
        print('p')
        return obj


    if request.method == 'POST':
        return redirect("http://", code=302)



server.run(port=9999, host=hostName)