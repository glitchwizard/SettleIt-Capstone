using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class AddSettleSheetMoneyDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "TicketPrice",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "TicketsSold",
                table: "SettleSheets",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<float>(
                name: "barSplit",
                table: "SettleSheets",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<decimal>(
                name: "grossBarSales",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "stageOverheadCost",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TicketPrice",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "TicketsSold",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "barSplit",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "grossBarSales",
                table: "SettleSheets");

            migrationBuilder.DropColumn(
                name: "stageOverheadCost",
                table: "SettleSheets");
        }
    }
}
