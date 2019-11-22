# Twitter

## Tweepy
[Tweepy](http://docs.tweepy.org/en/latest/) is an open source Python package that gives you a very convenient way to access the Twitter API with Python. Tweepy includes a set of classes and methods that represent the Twitter API models, and transparently handles various implementation details.

To install Tweepy we use the following command:

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

Steps to installs Flask.

To install flask you need to install some specifics requirements:

Virtual environments
Use a virtual environment to manage the dependencies for your project, both in development and in production.

What problem does a virtual environment solve? The more Python projects you have, the more likely it is that you need to work with different versions of Python libraries, or even Python itself. Newer versions of libraries for one project can break compatibility in another project.

Virtual environments are independent groups of Python libraries, one for each project. Packages installed for one project will not affect other projects or the operating system’s packages.

Python 3 comes bundled with the venv module to create virtual environments. If you’re using a modern version of Python, you can continue on to the next section.

If you’re using Python 2, see Install virtualenv first.

Create an environment
Create a project folder and a venv folder within:

$ mkdir myproject
$ cd myproject
$ python3 -m venv venv
On Windows:

$ py -3 -m venv venv
If you needed to install virtualenv because you are using Python 2, use the following command instead:

$ python2 -m virtualenv venv
On Windows:

> \Python27\Scripts\virtualenv.exe venv
Activate the environment
Before you work on your project, activate the corresponding environment:

$ . venv/bin/activate
On Windows:

> venv\Scripts\activate
Your shell prompt will change to show the name of the activated environment.

Install Flask
Within the activated environment, use the following command to install Flask:

$ pip install Flask
Flask is now installed. 

### Routes
These are the available routes:

* User method

We obtain the username and return the information associated with it.

```
/user/<username>
```

Example:

```
curl -X "https://ArcSoft2p2019/twitter/user/Aztrarok"
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
/posts/<number>
```

Example:

```
curl -X "https://ArcSoft2p2019/twitter/posts/"
```
```
[
  {
    "efficiency": 3.7, 
    "id": 1189654327247474689, 
    "likes": 1, 
    "user": 959874859374465025
  }, 
  {
    "efficiency": 3.7, 
    "id": 1189576053607620621, 
    "likes": 1, 
    "user": 959874859374465025
  }, 
  {
    "efficiency": 3.7, 
    "id": 1189553796541607936, 
    "likes": 1, 
    "user": 959874859374465025
  }, 
  {
    "efficiency": 3.7, 
    "id": 1189514506625540096, 
    "likes": 1, 
    "user": 959874859374465025
  }, 
  {
    "efficiency": 3.7, 
    "id": 1189262865821245442, 
    "likes": 1, 
    "user": 959874859374465025
  }
]
```

> To see the API structure in more detail, look at the [API documentation](https://ingenieriadesistemasutb.github.io/ArcSoft2p2019/).
