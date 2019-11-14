import time
import json
import tweepy # Library that provides us with access to the api of twitter

class Twitter:

	""" This application will consume the twitter 
			api and allows us to extract information from users and tweets.
	"""
	def __init__(self):
		
		# Credencials
		self.__creds = self.__get_creds()

		# Authenticate to Twitter
		self.__auth = tweepy.OAuthHandler(self.__creds["CONSUMER_KEY"], self.__creds["CONSUMER_SECRET"])
		self.__auth.set_access_token(self.__creds["ACCESS_TOKEN"], self.__creds["ACCESS_SECRET"])

		# Create API object
		self.__api = tweepy.API(self.__auth)
	
	
	def __get_creds(self):
		
		""" We obtain the credentials of our file,
				remember that this file should not be uploaded to the repository
		"""

		with open("twitter_credentials.json", "r") as file:
			return json.load(file)

	def verify(self):

		# Credentials are tested using verify_credentials()
		try:
			self.__api.verify_credentials()
			print("Twitter: Authentication OK")
			return True
		except:
			print("Twitter: Error during authentication")
			return False

	def __test(self):

		"""	We do a small test and verify that everything 
				functions correctly with our api
		"""

		# Create a tweet
		tweet = self.__api.update_status("Hi Ray, That tweet was made with Tweepy, apparently there is no mistake, fine! I will destroy myself in 5 seconds.")

		print("Tweet done!")

		# Deley to delete the tweet
		time.sleep(15)

		# Delete a tweet
		self.__api.destroy_status(tweet.id_str)

		print("Tweet deleted!")

	def get_user(self, username = "Aztrarok"):

		"""User information
		"""

		self.__username = username

		# Create User object
		user = self.__api.get_user(self.__username)

		info = {}
		info["id"] = user.id #The integer representation of the unique identifier for this User
		info["username"] = user.screen_name #The screen name, handle, or alias that this user identifies themselves with
		info["fullname"] = user.name #The name of the user, as they’ve defined it
		info["followers"] = user.followers_count #The number of followers this account currently has
		info["post"] = user.statuses_count #The number of post issued by the user

		return info


	def get_tweets(self, number = 20):

		"""Tweets information
		"""

		# Get the last tweets
		tweets =  self.__api.user_timeline(self.__username)

		info = {}
		k = 1
		for tweet in tweets:
			if tweet.favorite_count:
				v = {}
				v["id"] = tweet.id #The integer representation of the unique identifier for this
				v["likes"] = tweet.favorite_count #Indicates approximately how many times this post has been liked by users
				v["efficiency"] = round((tweet.favorite_count/tweet.user.followers_count)*100,1)#Indicates the efficiency of a post
				v["user"] = tweet.user.id #The user id who made the post
				info[k] = v
				k+=1
				if k == number+1:
					break
		
		return info

if __name__ == "__main__":
	app = Twitter()
	app.verify()
	print(app.get_user())
	tweets = app.get_tweets()
	for i in tweets:
		print(tweets.get(i))
