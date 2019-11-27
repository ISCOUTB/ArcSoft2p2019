# WebApplication1(Middleware)
## Docker
[Docker](https://www.docker.com/why-docker) is a tool to create isolated enviroments to develop different types of applications.

[How to install](https://docs.docker.com/v17.09/engine/installation/).

To create an image you execute the following command.
NOTE: Make sure you are running docker.
```
 docker build
```

To deploy the api
```
docker run [Image name]
```
### Dependencies
The [requirements](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/middleware/WebApplication1/requirements.txt) needed to execute the api as it's supposed to be are:
*Dotnet 3.0
#### User data from apis
```
_id, followers, fullname, ID, post, username
```

##### Post data from apis
```
_id, ID, efficiency, likes, username
```

###### Dashboard data
```
_id, followers, fullname, ID, post, username, efficiency, likes
```
