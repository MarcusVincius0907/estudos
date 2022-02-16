using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCar.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Plate { get; set; }

        public string Brand { get; set; }
        public decimal Price { get; set; }
    }
}
