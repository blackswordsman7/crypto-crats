import pymongo 

class Pymongo:
    def __init__(self, db, collection):
        self.client = pymongo.MongoClient("mongodb://saurabh:2015csa1217@ds117509.mlab.com:17509/crypto")
        self.db = self.client.crypto
        self.collection = self.db[collection]

    def insert(self, data):
        return self.collection.insert(data)
    
        

        
