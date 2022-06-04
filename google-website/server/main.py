from flask import Flask, redirect, url_for, request
import socket
hostName = socket.gethostname()
hostName = socket.gethostbyname(hostName)

output = ''

output += '<form action = "http://localhost:5000/login" method = "post">'
output += '<p><input type = "text" name = "nm" /></p>'
output += '<p><input type = "submit" value = "submit" /></p>'

app = Flask("name")

@app.route('/', methods=['POST', 'GET'])
def foo():
    if request.method == 'POST':
       data = request.data
       print(data.decode())
       return redirect(url_for('foo'))

    elif request.method == 'GET':
       return output

app.run(port = 9999 , host = hostName)
