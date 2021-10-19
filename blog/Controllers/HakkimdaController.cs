using blog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog.Controllers
{
    public class HakkimdaController : Controller
    {
        //
        // GET: /Hakkimda/
        blogContext db = new blogContext();

        public ActionResult Index()
        {
            return View(db.Hakkimdas.FirstOrDefault());
        }
        public ActionResult Takim()
        {


            return View(db.Hakkimdas.ToList());
        }

    }
}
