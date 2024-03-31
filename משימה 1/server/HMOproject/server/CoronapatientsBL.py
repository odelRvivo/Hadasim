from pymongo import MongoClient
from bson import ObjectId
from datetime import date
from datetime import datetime

class CoronapatientsBL():
    def __init__(self):
        self.__mongoClient = MongoClient(port=27017)
        self.__db = self.__mongoClient["HMO"]


    def get_all_Coronapatients(self):
        Coronapatients=[]
        listCoronapatients= self.__db.Coronapatients.find({})
        for c in listCoronapatients:
            print(c)
            Coronapatients.append(c)
        return Coronapatients



    def get_Coronapatients_by_id(self,id):
        Coronapatients= self.__db.Coronapatients.find_one({'id_HMO':id})
        return Coronapatients


    def add_Coronapatients(self, obj):
        new_Coronapatients = {}
        if (self.get_Coronapatients_by_id(obj.json['id_HMO']) != None):
            self.update_Coronapatients(obj.json['id_HMO'], obj);
        else:
            new_Coronapatients["id_HMO"] = obj.json['id_HMO']
            new_Coronapatients["date_positive_answer"] = obj.json['date_positive_answer']
            new_Coronapatients["date_of_recovery"] = obj.json['date_of_recovery']




            self.__db.Coronapatients.insert_one(new_Coronapatients)

    def update_Coronapatients(self, id, obj):
        Coronapatients = {}

        Coronapatients["id_HMO"] = obj.json['id_HMO']
        Coronapatients["date_positive_answer"] = obj.json['date_positive_answer']
        Coronapatients["date_of_recovery"] = obj.json['date_of_recovery']

        new_values = {"$set": Coronapatients}
        self.__db.Coronapatients.update_one({'_id':ObjectId(id) }, new_values)


