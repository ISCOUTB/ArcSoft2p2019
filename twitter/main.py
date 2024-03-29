from flask import Flask, make_response, jsonify
from twitter import Twitter

app = Flask(__name__)
api = Twitter()

@app.route("/")
def index():
	if api.verify():
		return """
						<h2>Available routes</h2>
						<p>User: /user/</p>
						<p>Posts: /posts/</p>
          	"""
	return "Twitter Api: Working BAD"

@app.route('/user/', methods=['GET'])
@app.route('/user/<string:username>', methods=['GET'])
def user(username = "Aztrarok"):
	try:
		resp = make_response(jsonify(api.get_user(username)))
	except:
		resp = make_response(jsonify({'code': 404, 'message': 'User not found.'}), 404)
	resp.headers['Access-Control-Allow-Origin'] = '*'
	return resp

@app.route('/posts/', methods=['GET'])
@app.route('/posts/<int:number>', methods=['GET'])
def posts(number = 5):
	if number < 1 or number > 20:
		print("The minimum number of tweets is 5 and the maximum is 20")
		if number < 1:
			number = 5
		else:
			number = 20
	try:
		resp = make_response(jsonify(api.get_tweets(number)))
	except:
		resp = make_response(jsonify({'code': 400, 'message': 'User not indicated.'}), 400)
	resp.headers['Access-Control-Allow-Origin'] = '*'
	return resp

if __name__== '__main__':
	app.run(debug = True, host='0.0.0.0', port=80)