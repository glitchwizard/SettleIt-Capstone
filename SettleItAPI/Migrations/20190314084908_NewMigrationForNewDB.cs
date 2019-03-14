using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class NewMigrationForNewDB : Migration
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
                    VenueName = table.Column<string>(nullable: true),
                    bandCutOfBarPercentage = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    finalNetIncome = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    grossBarSales = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    grossBarSplitPayout = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    grossTicketIncome = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    grossTicketSplitPayout = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    houseCutOfDoorPercentage = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    monetaryHouseCutOfBar = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    monetaryHouseCutOfDoor = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    stageOverheadCost = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    ticketPrice = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    ticketsSoldQTY = table.Column<int>(nullable: false),
                    totalGrossExpenses = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    totalGrossIncome = table.Column<decimal>(type: "decimal(18,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SettleSheets", x => x.SettleSheetId);
                });

            migrationBuilder.InsertData(
                table: "SettleSheets",
                columns: new[] { "SettleSheetId", "DateCreated", "DateOfShow", "HeadlinerBand", "VenueName", "bandCutOfBarPercentage", "finalNetIncome", "grossBarSales", "grossBarSplitPayout", "grossTicketIncome", "grossTicketSplitPayout", "houseCutOfDoorPercentage", "monetaryHouseCutOfBar", "monetaryHouseCutOfDoor", "stageOverheadCost", "ticketPrice", "ticketsSoldQTY", "totalGrossExpenses", "totalGrossIncome" },
                values: new object[] { 1L, "2019-03-08", "2019-03-19", "Stargasm", "Doug Fir Lounge", 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0, 0m, 0m });

            migrationBuilder.InsertData(
                table: "SettleSheets",
                columns: new[] { "SettleSheetId", "DateCreated", "DateOfShow", "HeadlinerBand", "VenueName", "bandCutOfBarPercentage", "finalNetIncome", "grossBarSales", "grossBarSplitPayout", "grossTicketIncome", "grossTicketSplitPayout", "houseCutOfDoorPercentage", "monetaryHouseCutOfBar", "monetaryHouseCutOfDoor", "stageOverheadCost", "ticketPrice", "ticketsSoldQTY", "totalGrossExpenses", "totalGrossIncome" },
                values: new object[] { 2L, "2019-03-08", "2019-03-27", "Gabby Holt", "Dante's", 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0m, 0, 0m, 0m });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SettleSheets");
        }
    }
}
