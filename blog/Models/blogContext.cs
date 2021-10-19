using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using blog.Models.Mapping;

namespace blog.Models
{
    public partial class blogContext : DbContext
    {
        static blogContext()
        {
            Database.SetInitializer<blogContext>(null);
        }

        public blogContext()
            : base("Name=blogContext")
        {
        }

        public DbSet<admin> admins { get; set; }
        public DbSet<Haber> Habers { get; set; }
        public DbSet<Hakkimda> Hakkimdas { get; set; }
        public DbSet<sysdiagram> sysdiagrams { get; set; }
        public DbSet<Yorumlar> Yorumlars { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new adminMap());
            modelBuilder.Configurations.Add(new HaberMap());
            modelBuilder.Configurations.Add(new HakkimdaMap());
            modelBuilder.Configurations.Add(new sysdiagramMap());
            modelBuilder.Configurations.Add(new YorumlarMap());
        }
    }
}
