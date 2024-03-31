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
from VaccinationBL import *
from CoronapatientsBL import *


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


VaccinationBL=VaccinationBL()


@app.route('/Vaccination', methods=['GET'])
def get_all_Vaccination():
    Vaccination = VaccinationBL.get_all_Vaccination()
    return jsonify(Vaccination)

@app.route('/getVaccinationbynum/<string:num>', methods=['GET'])
def get_Vaccination_by_num(num):
    Vaccination = VaccinationBL.get_Vaccination_by_num(num)
    return jsonify(Vaccination)

@app.route('/Vaccination/<string:id>', methods=['GET'])
def get_Vaccination_by_id(id):
    Vaccination = VaccinationBL.get_Vaccination_by_id(id)
    return jsonify(Vaccination)

@app.route('/Vaccination', methods=['POST'])
def add_Vaccination():
    VaccinationBL.add_Vaccination(request)
    return jsonify("created")


@app.route('/Vaccination/<string:id>', methods=['PUT'])
def update_Vaccination(id):
    VaccinationBL.update_Vaccination(id, request)
    return jsonify("updated")



CoronapatientsBL=CoronapatientsBL()

@app.route('/Coronapatients', methods=['GET'])
def get_all_Coronapatients():
    Vaccination = CoronapatientsBL.get_all_Coronapatients()
    return jsonify(Vaccination)


@app.route('/Coronapatients/<string:id>', methods=['GET'])
def get_Coronapatients_by_id(id):
    Vaccination = CoronapatientsBL.get_Coronapatients_by_id(id)
    return jsonify(Vaccination)

@app.route('/Coronapatients', methods=['POST'])
def add_Coronapatients():
    CoronapatientsBL.add_Coronapatients(request)
    return jsonify("created")


@app.route('/Coronapatients/<string:id>', methods=['PUT'])
def update_Coronapatients(id):
    CoronapatientsBL.update_Coronapatients(id, request)
    return jsonify("updated")





CORS(app)
app.run(debug=True)