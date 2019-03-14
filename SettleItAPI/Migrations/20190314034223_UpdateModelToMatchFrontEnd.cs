using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class UpdateModelToMatchFrontEnd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TicketPrice",
                table: "SettleSheets",
                newName: "ticketPrice");

            migrationBuilder.RenameColumn(
                name: "StageOverheadCost",
                table: "SettleSheets",
                newName: "stageOverheadCost");

            migrationBuilder.RenameColumn(
                name: "GrossBarSales",
                table: "SettleSheets",
                newName: "grossBarSales");

            migrationBuilder.RenameColumn(
                name: "TicketsSold",
                table: "SettleSheets",
                newName: "ticketsSoldQTY");

            migrationBuilder.RenameColumn(
                name: "BarSplit",
                table: "SettleSheets",
                newName: "totalGrossIncome");

            migrationBuilder.AddColumn<decimal>(
                name: "bandCutOfBarPercentage",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "finalNetIncome",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "grossBarSplitPayout",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "grossTicketIncome",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "grossTicketSplitPayout",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "houseCutOfDoorPercentage",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "monetaryHouseCutOfBar",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "monetaryHouseCutOfDoor",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "totalGrossExpenses",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bandCutOfBarPercentage",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "finalNetIncome",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "grossBarSplitPayout",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "grossTicketIncome",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "grossTicketSplitPayout",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "houseCutOfDoorPercentage",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "monetaryHouseCutOfBar",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "monetaryHouseCutOfDoor",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "totalGrossExpenses",
                table: "SettleSheets");

            migrationBuilder.RenameColumn(
                name: "ticketPrice",
                table: "SettleSheets",
                newName: "TicketPrice");

            migrationBuilder.RenameColumn(
                name: "stageOverheadCost",
                table: "SettleSheets",
                newName: "StageOverheadCost");

            migrationBuilder.RenameColumn(
                name: "grossBarSales",
                table: "SettleSheets",
                newName: "GrossBarSales");

            migrationBuilder.RenameColumn(
                name: "totalGrossIncome",
                table: "SettleSheets",
                newName: "BarSplit");

            migrationBuilder.RenameColumn(
                name: "ticketsSoldQTY",
                table: "SettleSheets",
                newName: "TicketsSold");
        }
    }
}
