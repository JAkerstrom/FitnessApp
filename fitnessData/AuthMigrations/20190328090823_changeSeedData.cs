using Microsoft.EntityFrameworkCore.Migrations;

namespace fitnessData.AuthMigrations
{
    public partial class changeSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Email", "PasswordHash", "UserName" },
                values: new object[] { "w@w.w", "4EAE35F1B35977A00EBD8086C259D4C9", "Anna" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Email", "PasswordHash", "UserName" },
                values: new object[] { "Test@Email.com", "DC647EB65E6711E155375218212B3964", "johanna" });
        }
    }
}
