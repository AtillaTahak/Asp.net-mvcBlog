using System;
using System.Collections.Generic;

namespace blog.Models
{
    public partial class Haber
    {
        public int id { get; set; }
        public string HaberBaslik { get; set; }
        public string HaberIcerik { get; set; }
        public string Haber1 { get; set; }
        public string HaberResim { get; set; }
        public Nullable<int> Kategori { get; set; }
        public Nullable<System.DateTime> Tarih { get; set; }
        public Nullable<int> YorumId { get; set; }
        public string HaberResimK { get; set; }
    }
}
