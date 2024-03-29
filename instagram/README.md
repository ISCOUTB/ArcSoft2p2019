# instagram-node-api [![Build Status](https://travis-ci.org/squidit/instagram-node-api.svg?branch=master)](https://travis-ci.org/squidit/instagram-node-api)[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)


## Installation

`npm install --save node-instagram`

## How it works

* First of all, you need to authentify. You can use `client_id/client_secret` from the app you are building, or an `access_token` from
a user that use your app.
* **Some features need an access_token to work**

```javascript
//Import module node-instagram
const Instagram = require('node-instagram').default;
 
const instagram = new Instagram({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  accessToken: 'user-access-token',
});
```
## Documentation

Documentation is available at https://www.npmjs.com/package/node-instagram

### Dependencies
Install/enable the required node extensions and dependencies. You can learn how to do so [here](|https://www.npmjs.com/package/node-instagrams).

`npm install`

## What is Instagram?

According to [the company](https://instagram.com/about/faq/):
>"Instagram is a fun and quirky way to share your life with friends through a series of pictures. Snap a photo with your mobile phone, then choose a filter to transform the image into a memory to keep around forever. We're building Instagram to allow you to experience moments in your friends' lives through pictures as they happen. We imagine a world more connected through photos."

**BETA** - A node wrapper to [Instagram API](https://www.instagram.com/developer/endpoints/) 😄

## Register to Instagram API

![Screenshot_1](https://user-images.githubusercontent.com/45336770/69469636-f283ce80-0d5f-11ea-93e3-a7bd8fb5a60e.png)

![Screenshot_2](https://user-images.githubusercontent.com/45336770/69470348-0f220580-0d64-11ea-9d98-abaaf1105919.png)

## Obtain CLIENT ID and Client Secret

![Screenshot_3](https://user-images.githubusercontent.com/45336770/69470407-79d34100-0d64-11ea-926e-53b6ec36f6d6.png)

## Routes
 
- [**GET** /login](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).
- [**GET** /auth/instagram](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).
- [**GET** /handleauth](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).
- [**GET** /user](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).
- [**GET** /posts](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).

example: get user 
```
http:localhost:8084/user
```
```
{
  "Id": "1229419812",
  "username": "iam_hugojose14",
  "followers": 368,
  "post": 198,
  "fullname": "Hugo José"
}
```

example: get post for user (last 5 post)
```
http:localhost:8084/posts
```
```
{
 {
    "ID": "2103458110285826246_1229419812",
    "user": "iam_hugojose14",
    "likes": 12,
    "eficiencia": 3.260869565217391,
    "date": "2019-5-12 12:06:23"
},
  {
    "ID": "2041791935252871739_1229419812",
    "user": "iam_hugojose14",
    "likes": 25,
    "eficiencia": 6.7934782608695645,
    "date": "2019-6-12 12:06:23"
  },
  {
    "ID": "2041791740024724715_1229419812",
    "user": "iam_hugojose14",
    "likes": 17,
    "eficiencia": 4.619565217391304,
    "date": "2019-7-12 12:06:23"
  },
  {
    "ID": "2041791467898341228_1229419812",
    "user": "iam_hugojose14",
    "likes": 25,
    "eficiencia": 6.7934782608695645,
    "date": "2019-8-12 12:06:23"
  },
  {
    "ID": "1884627089473035338_1229419812",
    "user": "iam_hugojose14",
    "likes": 19,
    "eficiencia": 5.163043478260869,
    "date": "2019-9-12 12:06:23"
  }
}
```
## Tests

Put the following in your environment:

    export INSTAGRAM_ACCESS_TOKEN=YOUACCESSTOKEN

Then just use

    make test


## Docker
[Docker](https://www.docker.com/why-docker) is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

To install docker we follow the official installation [guide](https://docs.docker.com/v17.09/engine/installation/).

Create an image of our [Dockerfile](https://runnable.com/docker/python/dockerize-your-python-application) with the following command
```
 docker build -t image_name .
```

Deploy the application using the command
```
docker run -p 8084:80 image_name
```

Open the browser, in the navigation bar place http://localhost:8084 and we will see the available routes.
