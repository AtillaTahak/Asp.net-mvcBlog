using System;
using System.Collections.Generic;

namespace blog.Models
{
    public partial class Hakkimda
    {
        public int id { get; set; }
        public string HakkimdaYazi { get; set; }
        public string HakkimdaFoto { get; set; }
        public string HakkimdaResim { get; set; }
        public string HakkimdaAd { get; set; }
        public string HakkimdaSoyAd { get; set; }
    }
}
