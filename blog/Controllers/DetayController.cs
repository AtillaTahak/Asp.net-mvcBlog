using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog.Controllers
{
    public class DetayController : Controller
    {
        //
        // GET: /Detay/
        blogContext db = new blogContext();
     
        public ActionResult Index(int id)
        {

            return View(db.Habers.Where(x => x.id == id).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult Yorum(int id, string name, string comment, string email)
        {
            Yorumlar hb = new Yorumlar();
            hb.Yorum = comment;
            hb.YorumAd = name;
            hb.YorumMail = email;
            hb.YorumId = id;
            db.Yorumlars.Add(hb);
            db.SaveChanges();
            Response.Redirect("/Detay/Index/" + id);


            return View();
        }
        public ActionResult Zaman(int id)
        {
            var degerr = db.Habers.Where(x => x.id == id).FirstOrDefault();

            return View(db.Habers.Where(x => x.Tarih == degerr.Tarih));
        }

    }
}
