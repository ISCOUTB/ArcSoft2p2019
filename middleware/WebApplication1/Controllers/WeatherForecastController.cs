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
 
    [HttpGet]
        public object Get()
        {
            string Usuario = HttpContext.Request.Query["Usuario"];
            string RedSocial = HttpContext.Request.Query["RedSocial"];
            var Servidor = new MongoClient("mongodb://RedSocial:3015665692@redsocial-shard-00-00-ouis9.mongodb.net:27017,redsocial-shard-00-01-ouis9.mongodb.net:27017,redsocial-shard-00-02-ouis9.mongodb.net:27017/test?ssl=true&replicaSet=RedSocial-shard-0&authSource=admin&retryWrites=true&w=majority");
            var Database = Servidor.GetDatabase("RedSocial");
            var collection = Database.GetCollection<Reservation>(RedSocial);
            var collectionPosts = Database.GetCollection<Postation>(RedSocial);
       

           

            var query = collection.AsQueryable<Reservation>();
            var result = from n in query
                         where n.username == Usuario
                         select n;
                         
            var queryPosts = collectionPosts.AsQueryable<Postation>();
            var resultPost = from t in queryPosts
                             where t.user == Usuario
                             select t;

           if(!result.Any()){
                var Client = new WebClient().DownloadString("http://"+RedSocial+"/user/"+Usuario);
                var documents = BsonSerializer.Deserialize<Reservation>(Client);
                var Posts = new WebClient().DownloadString("http://"+RedSocial+"/posts/");
                IList<Postation> posts = BsonSerializer.Deserialize<IList<Postation>>(Posts);
                List<object> lista = new List<object>();
                lista.Add(documents);
                lista.Add(posts);
                collection.InsertOne(documents);
                collectionPosts.InsertMany(posts);
                return lista;
            }else{
                List<object> listaPost = new List<object>();
                listaPost.Add(result);
                listaPost.Add(resultPost);
                return Ok(listaPost);
            }
            
           


        }



    }

 
}
