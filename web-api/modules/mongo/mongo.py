import pymongo 

class PyMongo:
    def __init__(self, db, collection):
        self.client = pymongo.MongoClient("mongodb://saurabh:2015csa1217@ds117509.mlab.com:17509/crypto")
        self.db = self.client.get_database(db)
        self.collection = self.db[collection]

    def insert(self, data):
        return self.collection.insert(data)

    def find_one(self, key):
    	return self.collection.find_one(key)
