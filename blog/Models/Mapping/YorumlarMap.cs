using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace blog.Models.Mapping
{
    public class YorumlarMap : EntityTypeConfiguration<Yorumlar>
    {
        public YorumlarMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.Yorum)
                .HasMaxLength(100);

            this.Property(t => t.YorumAd)
                .HasMaxLength(50);

            this.Property(t => t.YorumMail)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Yorumlar");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.Yorum).HasColumnName("Yorum");
            this.Property(t => t.YorumAd).HasColumnName("YorumAd");
            this.Property(t => t.YorumMail).HasColumnName("YorumMail");
            this.Property(t => t.YorumOnay).HasColumnName("YorumOnay");
            this.Property(t => t.YorumId).HasColumnName("YorumId");
        }
    }
}
