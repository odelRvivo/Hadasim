from pymongo import MongoClient
from bson import ObjectId
from datetime import date
from datetime import datetime

class VaccinationBL():
    def __init__(self):
        self.__mongoClient = MongoClient(port=27017)
        self.__db = self.__mongoClient["HMO"]


    def get_all_Vaccination(self):
        Vaccinations=[]
        listVaccinations= self.__db.Vaccination.find({})
        for c in listVaccinations:
            print(c)
            Vaccinations.append(c)
        return Vaccinations



    def get_Vaccination_by_id(self,id):
        Vaccinations = []
        listVaccinations = self.__db.Vaccination.find({'id_HMO':id})
        for c in listVaccinations:
            print(c)
            Vaccinations.append(c)
        return Vaccinations

    def get_Vaccination_by_num(self, num):
        Vaccinations = []
        listVaccinations= self.__db.Vaccination.find({'i':num})
        for c in listVaccinations:
            print(c)
            Vaccinations.append(c)
        return Vaccinations

    def add_Vaccination(self, obj):
        new_Vaccination = {}

        new_Vaccination["id_HMO"] = obj.json['id_HMO']
        new_Vaccination["i"] = obj.json['i']
        new_Vaccination["date"] = obj.json['date']
        new_Vaccination["manufacturer"] = obj.json['manufacturer']



        self.__db.Vaccination.insert_one(new_Vaccination)

    def update_Vaccination(self, id, obj):
        Vaccination = {}

        Vaccination["id_HMO"] = obj.json['id_HMO']
        Vaccination["i"] = obj.json['i']
        Vaccination["date"] = obj.json['date']
        Vaccination["manufacturer"] = obj.json['manufacturer']

        new_values = {"$set": Vaccination}
        self.__db.Vaccination.update_one({'_id':ObjectId(id) }, new_values)


