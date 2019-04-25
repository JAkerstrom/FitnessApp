using Microsoft.EntityFrameworkCore;

namespace fitnessData.Auth
{
    public class AuthDbContext : DbContext
    {
        public DbSet<ApplicationUser> Users { get; set; }

        public AuthDbContext(DbContextOptions<AuthDbContext> options) 
            : base(options)
        {

        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>().HasData(
               ApplicationUser.Create(1, "Anna", "w@w.w", "www", "", 0)
           );
        }
    }
}
