using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace blog.Models.Mapping
{
    public class adminMap : EntityTypeConfiguration<admin>
    {
        public adminMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.KAdi)
                .HasMaxLength(50);

            this.Property(t => t.Pass)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("admin");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.KAdi).HasColumnName("KAdi");
            this.Property(t => t.Pass).HasColumnName("Pass");
        }
    }
}
