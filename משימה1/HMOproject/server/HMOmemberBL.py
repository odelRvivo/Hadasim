from pymongo import MongoClient
from bson import ObjectId
from datetime import date
from datetime import datetime

class HMOmemberBL():
    def __init__(self):
        self.__mongoClient = MongoClient(port=27017)
        self.__db = self.__mongoClient["HMO"]


    def get_all_HMOmember(self):
        HMOmembers=[]
        listHMOmembers= self.__db.HMOmember.find({})
        for c in listHMOmembers:
            print(c)
            HMOmembers.append(c)
        return HMOmembers



    def get_HMOmember_by_id(self,id):
        HMOmember= self.__db.HMOmember.find_one({'id_num':id})
        return HMOmember

    def add_HMOmember(self, obj):
        new_HMOmember = {}
        if (self.get_HMOmember_by_id(obj.json['id_num']) != None):
            self.update_HMOmember(obj.json['id_num'], obj);
        else:
            new_HMOmember["id_num"] = obj.json['id_num']
            new_HMOmember["last_name"] = obj.json['last_name']
            new_HMOmember["first_name"] = obj.json['first_name']
            new_HMOmember["birth_date"] = obj.json['birth_date']
            new_HMOmember["city"] = obj.json['city']
            new_HMOmember["street"] = obj.json['street']
            new_HMOmember["numhome"] = obj.json['numhome']
            new_HMOmember["cell_phone"] = obj.json['cell_phone']
            new_HMOmember["phone"] = obj.json['phone']

            self.__db.HMOmember.insert_one(new_HMOmember)

    def update_HMOmember(self, id, obj):
        HMOmember = {}

        HMOmember["id_num"] = obj.json['id_num']
        HMOmember["last_name"] = obj.json['last_name']
        HMOmember["first_name"] = obj.json['first_name']
        HMOmember["birth_date"] = obj.json['birth_date']
        HMOmember["city"] = obj.json['city']
        HMOmember["street"] = obj.json['street']
        HMOmember["numhome"] = obj.json['numhome']
        HMOmember["cell_phone"] = obj.json['cell_phone']
        HMOmember["phone"] = obj.json['phone']
        new_values = {"$set": HMOmember}
        self.__db.HMOmember.update_one({'id': id}, new_values)

    def delete_HMOmember(self, id):
        self.__db.HMOmember.delete_one({'id': id})


