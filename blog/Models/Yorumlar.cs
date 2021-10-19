using System;
using System.Collections.Generic;

namespace blog.Models
{
    public partial class Yorumlar
    {
        public int id { get; set; }
        public string Yorum { get; set; }
        public string YorumAd { get; set; }
        public string YorumMail { get; set; }
        public Nullable<int> YorumOnay { get; set; }
        public Nullable<int> YorumId { get; set; }
    }
}
