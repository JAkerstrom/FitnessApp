using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace fitnessData.Migrations
{
    public partial class fromUserToUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "TimeToLive",
                value: new DateTime(2019, 3, 14, 13, 18, 8, 482, DateTimeKind.Local).AddTicks(2924));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                column: "TimeToLive",
                value: new DateTime(2019, 3, 14, 11, 18, 40, 872, DateTimeKind.Local).AddTicks(5995));
        }
    }
}
