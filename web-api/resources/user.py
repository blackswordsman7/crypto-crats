import config
from flask_restful import Resource, reqparse
from mongo import PyMongo

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('password', type=str)
parser.add_argument('entity', type=str)
parser.add_argument('name', type=str)
parser.add_argument('address', type=str)
class Register(Resource):
	def post(self):
		try:
			db = PyMongo('crypto', 'users')
			args = parser.parse_args()
			data = {
				"username": str(args['username']),
				"pswd": str(args['password']),
				"name": str(args['name']),
				"entity": str(args['entity']),
				"address": str(args['address'])
			}
			if db.find_one({'address': str(args['address'])}):
				return {'message': "User Already exists"}, 401
			db.insert(data)
			return {'message': 'ok'}
		except Exception as e:
			print(e)
			return {'message': 'error'}

parser.add_argument('username', type=str)
parser.add_argument('password', type=str)
class Login(Resource):
	def post(self):
		try:
			db = PyMongo('crypto', 'users')
			args = parser.parse_args()
			data = {
				"username": str(args['username']),
				"pswd": str(args['password'])
			}
			r_data = db.find_one(data)
			r_data.pop('pswd')
			r_data.pop('_id')
			if r_data:
				return {'data': r_data}
			return {'message': 'Invalid User name or Password'}, 403
		except Exception as e:
			print(e)
			return {'message': 'An error ocurred'}
