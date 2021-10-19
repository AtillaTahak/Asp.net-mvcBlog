using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog.Controllers
{
    public class KategorilerController : Controller
    {
        //
        // GET: /Kategoriler/
        blogContext db = new blogContext();

        public ActionResult Index(int id)
        {
           var deger =  db.Habers.Where(x => x.Kategori == id).ToList();
            return View(deger);
        }

    }
}
