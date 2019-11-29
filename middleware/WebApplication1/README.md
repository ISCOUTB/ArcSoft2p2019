# WebApplication1(Middleware)
Middleware is a multi-purpose system that assists an application to interact or communicate with other applications, or software packages, networks, hardware or operating systems.

### Dependencies
* Mongo DB
* .Net Core SDk 3.0
* Internet connection to download docker images.

## Installation
We installed the .NET Core SDK 3.0 from https://dotnet.microsoft.com/download/dotnet-core/3.0,
with SDK 3.0 you can run any netcore application to date with the command:

`dotnet run`

## Database
We created a database in Mongo Atlas to store the APIS data.
![DB image](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/middleware/colecciones.png)

within mongo atlas we have a collection for each API where each data returned by the APIS will be saved.

**NOTE:** the database would serve as a cache in case you type a user that has been previously searched.

## Consults
When making the query to the database if it finds the user inside it returns to the dashboard showing the information of the user.

![DB image](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/middleware/consulta.png)

## How it works
We consult the user to the API, after this when we get it we store the information in the database and return it to the Dashboard in the following way:

#### Structure of user data from apis
```
followers, fullname, ID, post, username
```

#### Structure of post data from apis
```
ID, efficiency, likes, user
```

#### Dashboard data
```
followers, fullname, ID, post, username, efficiency, likes
```

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
