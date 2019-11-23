# instagram-node-api [![Build Status](https://travis-ci.org/squidit/instagram-node-api.svg?branch=master)](https://travis-ci.org/squidit/instagram-node-api) ![[Depencies status](https://david-dm.org/squidit/instagram-node-api/)](https://david-dm.org/squidit/instagram-node-api.svg) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

This is a node library which emulates Instagram's Private API. This library is packed full with almost all the features from the Instagram Android App. This includes media uploads, direct messaging, stories and more.

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
- [**GET** /post](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/edit/master/instagram).

example: get user 
```
http:localhost:80/user
```
```
{
  "ok": true,
  "id": "1229419812",
  "username": "iam_hugojose14",
  "followers": 368,
  "post": 198,
  "fullname": "Hugo José"
}
```

example: get post for user (last 5 post)
```
http:localhost:80/posts
```
```
{
 {
    "id": "2103458110285826246_1229419812",
    "user": "1229419812",
    "likes": 12,
    "eficiencia": 3.260869565217391
},
  {
    "id": "2041791935252871739_1229419812",
    "user": "1229419812",
    "likes": 25,
    "eficiencia": 6.7934782608695645
  },
  {
    "id": "2041791740024724715_1229419812",
    "user": "1229419812",
    "likes": 17,
    "eficiencia": 4.619565217391304
  },
  {
    "id": "2041791467898341228_1229419812",
    "user": "1229419812",
    "likes": 25,
    "eficiencia": 6.7934782608695645
  },
  {
    "id": "1884627089473035338_1229419812",
    "user": "1229419812",
    "likes": 19,
    "eficiencia": 5.163043478260869
  }
}
```
## Tests

Put the following in your environment:

    export INSTAGRAM_ACCESS_TOKEN=YOUACCESSTOKEN

Then just use

    make test
