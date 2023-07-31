using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Request> Requests { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            _ = builder.HasDefaultSchema("Nitro-HR");
            _ = builder.Entity<ApplicationUser>(entity =>
            {
                _ = entity.ToTable(name: "User");
            });
            _ = builder.Entity<IdentityRole>(entity =>
            {
                _ = entity.ToTable(name: "Role");
            });
            _ = builder.Entity<IdentityUserRole<string>>(entity =>
            {
                _ = entity.ToTable("UserRoles");
            });
            _ = builder.Entity<IdentityUserClaim<string>>(entity =>
            {
                _ = entity.ToTable("UserClaims");
            });
            _ = builder.Entity<IdentityUserLogin<string>>(entity =>
            {
                _ = entity.ToTable("UserLogins");
            });
            _ = builder.Entity<IdentityRoleClaim<string>>(entity =>
            {
                _ = entity.ToTable("RoleClaims");
            });
            _ = builder.Entity<IdentityUserToken<string>>(entity =>
            {
                _ = entity.ToTable("UserTokens");
            });
        }
    }
}
