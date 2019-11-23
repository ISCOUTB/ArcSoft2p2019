# Twitter

## Docker
[Docker](https://www.docker.com/why-docker) is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

To install docker we follow the official installation [guide](https://docs.docker.com/v17.09/engine/installation/).

Create an image of our [Dockerfile](https://runnable.com/docker/python/dockerize-your-python-application) with the following command
```
 docker build --tag=image_name .
```

Deploy the application using the command
```
docker run -p 8081:80 image_name
```

Open the browser, in the navigation bar place http://localhost:8081 and we will see the available routes.
```
User: /twitter/user/

Posts: /twitter/posts/
```
### Dependencies
These are the [modules](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/twitter/requirements.txt) necessary for the application to work properly, it is NOT necessary to install them on our own since Docker does it for us.
* Tweepy
* Flask

## Tweepy
[Tweepy](http://docs.tweepy.org/en/latest/) is an open source Python package that gives you a very convenient way to access the Twitter API with Python. Tweepy includes a set of classes and methods that represent the Twitter API models, and transparently handles various implementation details.

To install Tweepy we use the following command (NOT necessary):

```
pip3 install tweepy
```

### Create authentication credentials
The Twitter API requires that all requests use OAuth to authenticate, therefore, the authentication credentials necessary to use the API must be created.

If we already have a Twitter account we go to the site of [Twitter developers](https://developer.twitter.com/) and follow all the steps to obtain our developer account.

<img src="https://i.ibb.co/1XrhkZH/twitterdev.png">

Since Twitter grants authentication credentials to applications, not accounts, we must register the application in order to make calls to the API. To register the application, we go to the [Twitter applications site](https://developer.twitter.com/en/apps) and select the option Create an application.

We follow the steps and once created the application we will go to details to be able to generate the credentials.

<img src="https://i.ibb.co/0m7BJdY/Captura-de-Pantalla-2019-10-09-a-la-s-5-49-17-p-m.png">

In the Keys and tokens tab we generate the credentials we need:

* Consumer key
* Consumer secret
* Access token
* Access secret

<img src="https://i.ibb.co/0Msw8xh/Captura-de-Pantalla-2019-10-09-a-la-s-5-52-30-p-m.png">

> Note: It is advisable to add credentials to a "twitter_credentials.json" file instead of including them directly in your code, this file should not be uploaded to the repository.

## Flask
[Flask](http://flask.palletsprojects.com/en/1.1.x/) is a minimalist framework written in Python that allows you to create web applications quickly and with a minimum number of lines of code.

To install Flask we use the following command (NOT necessary):

```
pip3 install flask
```

### Routes
These are the available routes:

* User method

We obtain the username and return the information associated with it.

```
/twitter/user/<username>
```

Example:

```
curl -X "http://localhost:8081/twitter/user/Aztrarok"
```
```
{
  "followers": 27, 
  "fullname": "Ray Diaz Vega", 
  "id": 959874859374465025, 
  "post": 230, 
  "username": "Aztrarok"
}
```

* Posts method

We obtain the information of the last 5 publications made by the user

```
/twitter/posts/<number>
```

Example:

```
curl -X "http://localhost:8081/twitter/posts/"
```
```
[
  {
    "date": "2019-10-30 21:24:28", 
    "efficiency": "3.7037", 
    "id": "1189654327247474689", 
    "likes": "1", 
    "user": "959874859374465025"
  }, 
  {
    "date": "2019-10-30 16:13:27", 
    "efficiency": "3.7037", 
    "id": "1189576053607620621", 
    "likes": "1", 
    "user": "959874859374465025"
  }, 
  {
    "date": "2019-10-30 14:45:00", 
    "efficiency": "3.7037", 
    "id": "1189553796541607936", 
    "likes": "1", 
    "user": "959874859374465025"
  }, 
  {
    "date": "2019-10-30 12:08:53", 
    "efficiency": "3.7037", 
    "id": "1189514506625540096", 
    "likes": "1", 
    "user": "959874859374465025"
  }, 
  {
    "date": "2019-10-29 19:28:57", 
    "efficiency": "3.7037", 
    "id": "1189262865821245442", 
    "likes": "1", 
    "user": "959874859374465025"
  }
]
```

> To see the API structure in more detail, look at the [API documentation](https://ingenieriadesistemasutb.github.io/ArcSoft2p2019/).
