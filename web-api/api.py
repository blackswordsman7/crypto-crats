import sys
import os
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resources.user import Register, Login

app = Flask(__name__)
api = Api(app, prefix="/v1")
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api.add_resource(Register, '/user/register')
api.add_resource(Login, '/user/register')


if __name__ == "__main__":
	app.run(port=8000, debug=False)
