using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver.Builders;
using MongoDB.Driver;
using MongoDB.Bson;
using WebApplication1.Models;
using MongoDB.Driver.Linq;
using System.Net;
using MongoDB.Bson.Serialization;
using Newtonsoft.Json;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("/api/Datos")]
    public class WeatherForecastController : ControllerBase
    {
 
    /*
    protected static MongoClient Cliente = new MongoClient("mongodb://RedSocial:3015665692@redsocial-shard-00-00-ouis9.mongodb.net:27017,redsocial-shard-00-01-ouis9.mongodb.net:27017,redsocial-shard-00-02-ouis9.mongodb.net:27017/test?ssl=true&replicaSet=RedSocial-shard-0&authSource=admin&retryWrites=true&w=majority");

    protected static MongoDatabase database = Cliente.GetDatabase("RedSocial");
    */
    [HttpGet]
        public object Get()
        {
            string Usuario = HttpContext.Request.Query["Usuario"];
            string RedSocial = HttpContext.Request.Query["RedSocial"];

            var Client = new WebClient().DownloadString("https://sunnypropercygwin--carlossalas2.repl.co/api/v1/users?");
            var Servidor = new MongoClient("mongodb://RedSocial:3015665692@redsocial-shard-00-00-ouis9.mongodb.net:27017,redsocial-shard-00-01-ouis9.mongodb.net:27017,redsocial-shard-00-02-ouis9.mongodb.net:27017/test?ssl=true&replicaSet=RedSocial-shard-0&authSource=admin&retryWrites=true&w=majority");
            
            var Database= Servidor.GetDatabase("RedSocial");

            var collection = Database.GetCollection<Reservation>("Usuarios");
       
            var list = JsonConvert.DeserializeObject(Client);



            IList<Reservation> documents = BsonSerializer.Deserialize<IList<Reservation>>(Client);
            collection.InsertOne(documents[0]);

            var query = collection.AsQueryable<Reservation>();
            var result = from n in query
                         where n.Username == "t00045753"
                         select n;

            if (result != null)
                return result;
            else
                return "[]";



        }



    }

 
}
