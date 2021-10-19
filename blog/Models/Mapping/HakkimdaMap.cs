using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace blog.Models.Mapping
{
    public class HakkimdaMap : EntityTypeConfiguration<Hakkimda>
    {
        public HakkimdaMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.HakkimdaAd)
                .HasMaxLength(50);

            this.Property(t => t.HakkimdaSoyAd)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Hakkimda");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.HakkimdaYazi).HasColumnName("HakkimdaYazi");
            this.Property(t => t.HakkimdaFoto).HasColumnName("HakkimdaFoto");
            this.Property(t => t.HakkimdaResim).HasColumnName("HakkimdaResim");
            this.Property(t => t.HakkimdaAd).HasColumnName("HakkimdaAd");
            this.Property(t => t.HakkimdaSoyAd).HasColumnName("HakkimdaSoyAd");
        }
    }
}
