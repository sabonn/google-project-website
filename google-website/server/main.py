from flask import Flask, redirect, request, url_for, jsonify
import socket
import json

hostName = socket.gethostname()
hostName = socket.gethostbyname(hostName)
ipv_four_list = []
obj = {}
server = Flask(__name__)
location_list = []

@server.route('/', methods=['GET', 'POST'])
def ma():
    global obj
    if request.method == 'POST':

        data = request.get_data()
        print(type(data))
        data = json.loads(data.decode())
        print(type(data))
        obj = data
        print(obj)
        return redirect(url_for('ma'))
    if request.method == 'GET':
        print(obj)
        return jsonify(obj)


@server.route('/locations', methods=['POST'])
def locations():
    global location_list, ipv_four_list
    if request.method == 'POST':
        data = request.get_data().decode()
        print(data)
        user = request.remote_addr
        if user in ipv_four_list:
            location_list.insert(ipv_four_list.index(user), data)
            location_list.pop(ipv_four_list.index(user) + 1)
            print(ipv_four_list)
            print(location_list)

        else:
            ipv_four_list.append(user)
            location_list.append(data)
            print(ipv_four_list)
            print(location_list)
        return redirect(url_for('locations'))


# @server.route('/', methods=['POST'])
# def ():
#    data = request.get_data().decode()
#
# @server.route('/', methods=['POST'])
# def ():
#    data = request.get_data().decode()


server.run(port=9999, host=hostName)