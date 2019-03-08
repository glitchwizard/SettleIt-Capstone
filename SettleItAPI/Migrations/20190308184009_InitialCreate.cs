using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SettleSheets",
                columns: table => new
                {
                    SettleSheetId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<string>(nullable: true),
                    DateOfShow = table.Column<string>(nullable: true),
                    HeadlinerBand = table.Column<string>(nullable: true),
                    VenueName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SettleSheets", x => x.SettleSheetId);
                });

            migrationBuilder.InsertData(
                table: "SettleSheets",
                columns: new[] { "SettleSheetId", "DateCreated", "DateOfShow", "HeadlinerBand", "VenueName" },
                values: new object[] { 1L, "2019-03-08", "2019-03-19", "Stargasm", "Doug Fir Lounge" });

            migrationBuilder.InsertData(
                table: "SettleSheets",
                columns: new[] { "SettleSheetId", "DateCreated", "DateOfShow", "HeadlinerBand", "VenueName" },
                values: new object[] { 2L, "2019-03-08", "2019-03-27", "Gabby Holt", "Dante's" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SettleSheets");
        }
    }
}
