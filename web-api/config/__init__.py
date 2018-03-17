import sys
import os


def load_config():
	current_dir = os.path.abspath('./')

	os.environ.update({
		"ROOT_PATH": current_dir
	})

	os.environ['secret_key'] = "yb1yxrt7cv8txb74tv6ct1n7iyzbirb3y48zyxn7c7"
	
	sys.path.append(os.path.join(os.environ.get('ROOT_PATH'), 'modules'))


load_config()