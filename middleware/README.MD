# WebApplication1(Middleware)
Middleware is a multi-purpose system that assists an application to interact or communicate with other applications, or software packages, networks, hardware or operating systems.

### Dependencies
* Mongo DB
* .Net Core SDk 3.0
* MongoDB Driver to work with netcore
* Internet connection to download docker images.

## Installation
We installed the .NET Core SDK 3.0 from https://dotnet.microsoft.com/download/dotnet-core/3.0,
with SDK 3.0 you can run any netcore application to date with the command:

`dotnet run`

## Documentation
Documentation is available at: https://docs.microsoft.com/en-us/dotnet/

## Database
We created a database in Mongo Atlas to store the APIS data.
![DB image](https://github.com/IngenieriaDeSistemasUTB/ArcSoft2p2019/blob/master/middleware/colecciones.png)

within mongo atlas we have a collection for each API where each data sent by them will be saved.

connection to the database found in mongo atlas:

`var Servidor = new MongoClient("database connection")`

**NOTE:** the database would work as a cache in case you type a user that has been previously searched.

## Queries
When making the query to the database if it finds the user inside it returns to the dashboard showing the information of the user.

```C#
var query = collection.AsQueryable<Reservation>();
var result = from n in query
             where n.username == Usuario
             select n;
                         
var queryPosts = collectionPosts.AsQueryable<Postation>();
var resultPost = from t in queryPosts
                 where t.user == Usuario
                 select t;
```
## How it works
We check the user that the dashboard ask for, in the cache(Database), if it is on the cache, we send back the data, if not, we ask to the API, after this when we get it we store the information in the database and return it to the Dashboard in the following way:

### Communication route with Dashboard
```
/api/Datos?Usuario="ejemplo"&RedSocial="ejemplo"
```

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
