using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        blogContext db = new blogContext();
        public ActionResult Index()
        {
            return View(db.Habers.ToList());
        }
        public ActionResult Gecmis()
        {
            return View(db.Habers.OrderByDescending(x=>x.Tarih));
        }
        public ActionResult kategori()
        {
            return View(db.Habers.ToList());
        }

    }
}
