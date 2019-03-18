using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

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
               ApplicationUser.Create(1, "johanna", "Test@Email.com", "Password", "secretToken1")
           );
        }
    }
}
