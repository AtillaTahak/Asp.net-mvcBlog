using blog.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog.Controllers
{
    public class YonetimController : Controller
    {
        //
        // GET: /Yonetim/
        blogContext db = new blogContext();


        public ActionResult Index()
        {
            return View();
        }
        public ActionResult List()
        {
            return View(db.Habers.ToList());
        }
    [HttpPost]
        public ActionResult Index(string kadi,string pass)
        {
            var deger = db.admins.Where(x => x.KAdi == kadi || x.Pass == pass).FirstOrDefault();
            if (deger != null)
            {
                Response.Redirect("/Yonetim/List/");
            }
            else
            {

                Response.Redirect("/");
            }
            return View();
        }
        //
        // GET: /Yonetim/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Yonetim/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Yonetim/Create
        string ResimKaydet(HttpPostedFileBase file)
        {
            Image orj = Image.FromStream(file.InputStream);
            Bitmap kck = new Bitmap(orj, 65, 65);
            Bitmap buyuk = new Bitmap(orj, 664, 320);


            string yol = Path.GetFileNameWithoutExtension(file.FileName) + Guid.NewGuid() + Path.GetExtension(file.FileName);
            buyuk.Save(Server.MapPath("~/images/buyuk/" + yol));
            kck.Save(Server.MapPath("~/images/kck/" + yol));


            return yol;
        }


        [HttpPost]
        public ActionResult Create(Haber gelenHaber, HttpPostedFileBase resim, HttpPostedFileBase resimk)
        {

            string yol = ResimKaydet(resim);
            string yolK = ResimKaydet(resimk);

            gelenHaber.HaberResim = "/images/buyuk/" + yol;
            gelenHaber.HaberResimK = "/images/kck/" + yolK;
            try
            {
                // TODO: Add insert logic here
                db.Habers.Add(gelenHaber);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Yonetim/Edit/5

        public ActionResult Edit(int id)
        {
            return View(db.Habers.Where(x=>x.id ==id).FirstOrDefault());
        }

        //
        // POST: /Yonetim/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection,Haber hbler)
        {
            try
            {
                db.Entry(hbler).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Yonetim/Delete/5

        public ActionResult Delete(int id)
        {
            return View(db.Habers.Where(x=>x.id==id).FirstOrDefault());
        }

        //
        // POST: /Yonetim/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection,Haber hb)
        {
            try
            {
                hb = db.Habers.Find(id);
                db.Habers.Remove(hb);
                db.SaveChanges();
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
