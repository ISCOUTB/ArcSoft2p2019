# Reddit

**Integrantes**
* Heiner Acosta Silgado
* Giovanny Jukopila Rueda
* Michel Maloof Bardi 

**Profesor**  
Jairo Enrique Serrano  

**Institución**  
Universidad Tecnológica de Bolívar  

<img src="https://user-images.githubusercontent.com/36655827/69597242-5235e000-0fd3-11ea-9efd-8a45c54c4543.png" width="300">
  

## What is reddit?

Reddit is an American social news aggregation, web content rating, and discussion website. Registered members submit content to the site such as links, text posts, and images, which are then voted up or down by other members. Posts are organized by subject into user-created boards called "subreddits", which cover a variety of topics including news, science, movies, video games, music, books, fitness, food, and image-sharing
## How it works?

First you need an application id and secret so reddit knows your application. You get this information by going to https://www.reddit.com/prefs/apps and clicking "are you a developer? create an app

![WhatsApp Image 2019-11-25 at 5 45 43 PM](https://user-images.githubusercontent.com/36655827/69596423-8956c200-0fd0-11ea-9799-ddec6192c6a2.jpeg)

## Authorization

In order to make requests to reddit's API via OAuth, you must acquire an Authorization token, either on behalf of a user or for your client. To act on behalf of a user, the user has to let reddit.com know that they're ok with your app performing certain actions for them, such as reading their subreddit subscriptions or sending a private message.

In order to do so, your website or app should send the user to the authorization URL:

https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&duration=DURATION&scope=SCOPE_STRING

## GET ACCESS AND REFRESH TOKEN

-Authentication of the app created in reddit with the credentials it generates (ID client and secret client):

<img src="https://user-images.githubusercontent.com/36655827/69597190-19960680-0fd3-11ea-840a-ba3d4921014c.jpeg" width="900">


-Return the access token and the type of token:

<img src="https://user-images.githubusercontent.com/36655827/69596374-5dd3d780-0fd0-11ea-94fb-5c0bed258479.jpeg" width="700">


-We pass to the api of reddit our access token to authorize us and we can make the requests:

<img src="https://user-images.githubusercontent.com/36655827/69646247-762a0d80-1035-11ea-85f3-dd2719991f2a.jpeg" width="900">


## Documentation
Documentation is available at https://www.reddit.com/dev/api/oauth 

## Dependencies
    .Lumen PHP Micro-Framework By Laravel

### Lumen PHP By laravel 
Lumen is a PHP micro-framework built to deliver microservices and blazing fast APIs. Learn how to build and secure RESTful APIs with Lumen

#### Download the Lumen installer :   
`"composer global require "laravel/lumen-installer"`

## Routes

<img src="https://user-images.githubusercontent.com/36655827/69863509-00a78280-126b-11ea-9df7-f8ddcd374bf5.png" width="500">

#### Json format data is in the userjson / 'username "path username = your user on reddit (write):

<img src="https://user-images.githubusercontent.com/36655827/69863976-0baee280-126c-11ea-8747-49393f44cd3d.jpeg" width="500">

## Examples

#### To get User and karma :
<img src="https://user-images.githubusercontent.com/36655827/69651850-b6da5480-103e-11ea-8057-902069b17f05.jpeg" width="700">


#### To get the efficiency :
<img src="https://user-images.githubusercontent.com/36655827/69651965-e5582f80-103e-11ea-95ec-64373c70a02e.jpeg" width="700">



