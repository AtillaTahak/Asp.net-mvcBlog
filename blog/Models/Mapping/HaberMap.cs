using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace blog.Models.Mapping
{
    public class HaberMap : EntityTypeConfiguration<Haber>
    {
        public HaberMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.HaberBaslik)
                .HasMaxLength(50);

            this.Property(t => t.HaberIcerik)
                .HasMaxLength(100);

            // Table & Column Mappings
            this.ToTable("Haber");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.HaberBaslik).HasColumnName("HaberBaslik");
            this.Property(t => t.HaberIcerik).HasColumnName("HaberIcerik");
            this.Property(t => t.Haber1).HasColumnName("Haber");
            this.Property(t => t.HaberResim).HasColumnName("HaberResim");
            this.Property(t => t.Kategori).HasColumnName("Kategori");
            this.Property(t => t.Tarih).HasColumnName("Tarih");
            this.Property(t => t.YorumId).HasColumnName("YorumId");
            this.Property(t => t.HaberResimK).HasColumnName("HaberResimK");
        }
    }
}
