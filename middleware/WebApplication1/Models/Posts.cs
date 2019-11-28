using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace WebApplication1.Models
{
    public class Postation
    {

            public ObjectId _id { get; set; }
            public string ID { get; set; }
            public string date { get; set; }
            public string efficiency { get; set; }
            public string likes { get; set; }
            public string user { get; set; }
        }
    
}
