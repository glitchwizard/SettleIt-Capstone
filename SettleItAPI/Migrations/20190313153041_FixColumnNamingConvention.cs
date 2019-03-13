using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class FixColumnNamingConvention : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "stageOverheadCost",
                table: "SettleSheets",
                newName: "StageOverheadCost");

            migrationBuilder.RenameColumn(
                name: "grossBarSales",
                table: "SettleSheets",
                newName: "GrossBarSales");

            migrationBuilder.RenameColumn(
                name: "barSplit",
                table: "SettleSheets",
                newName: "BarSplit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StageOverheadCost",
                table: "SettleSheets",
                newName: "stageOverheadCost");

            migrationBuilder.RenameColumn(
                name: "GrossBarSales",
                table: "SettleSheets",
                newName: "grossBarSales");

            migrationBuilder.RenameColumn(
                name: "BarSplit",
                table: "SettleSheets",
                newName: "barSplit");
        }
    }
}
