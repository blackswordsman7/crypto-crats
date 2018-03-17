import config
from flask_restful import Resource, reqparse
from mongo import Pymongo

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('password', type=str)
class User(Resource):
    def post(self):
        try:
            db = Pymogo('crypto', 'users')
        except:
            return {'message': 'error'}
