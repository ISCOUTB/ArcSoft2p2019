using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Reservation
    {
        public ObjectId _id { get; set; }
        public string followers { get; set; }
        public string fullname { get; set; }
        public string ID { get; set; }
        public string post { get; set; }
        public string username { get; set; }
    }
}
