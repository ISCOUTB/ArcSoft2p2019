from flask import Flask, jsonify
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
		message = api.get_user(username)
	except:
		return jsonify({'code': 404, 'message': 'User not found.'}), 404
	return jsonify(message)

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
		message = api.get_tweets(number)
	except:
		return jsonify({'code': 400, 'message': 'User not indicated.'}), 400
	return jsonify(message)

if __name__== '__main__':
	app.run(debug = True, host='0.0.0.0', port=80)
