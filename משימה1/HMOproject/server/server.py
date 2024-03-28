import json
from urllib import request

from flask import Flask
from flask import request
from flask_cors import CORS
from bson import ObjectId
from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from HMOmemberBL import *
import hashlib


app = Flask(__name__)




class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)


HMOmemberBL=HMOmemberBL()

app.json_encoder = MyEncoder
@app.route('/HMOmember', methods=['GET'])
def get_all_HMOmember():
    customers = HMOmemberBL.get_all_HMOmember()
    return jsonify(customers)


@app.route('/HMOmember/<string:id>', methods=['GET'])
def get_HMOmember_by_id(id):
    customer = HMOmemberBL.get_HMOmember_by_id(id)
    return jsonify(customer)

@app.route('/HMOmember', methods=['POST'])
def add_customer():
    HMOmemberBL.add_HMOmember(request)
    return jsonify("created")


@app.route('/HMOmember/<string:id>', methods=['PUT'])
def update_HMOmember(id):
    HMOmemberBL.update_HMOmember(id, request)
    return jsonify("updated")


@app.route('/HMOmember/<string:id>', methods=['DELETE'])
def delete_HMOmember(id):
    HMOmemberBL.delete_HMOmember(id)
    return jsonify("deleted")





CORS(app)
app.run(debug=True)