using Microsoft.EntityFrameworkCore.Migrations;

namespace SettleItAPI.Migrations
{
    public partial class updateDecimalFloatAmount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "barSplit",
                table: "SettleSheets",
                type: "decimal(18,4)",
                nullable: false,
                oldClrType: typeof(float));

            migrationBuilder.UpdateData(
                table: "SettleSheets",
                keyColumn: "SettleSheetId",
                keyValue: 1L,
                column: "barSplit",
                value: 0m);

            migrationBuilder.UpdateData(
                table: "SettleSheets",
                keyColumn: "SettleSheetId",
                keyValue: 2L,
                column: "barSplit",
                value: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "barSplit",
                table: "SettleSheets",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,4)");

            migrationBuilder.UpdateData(
                table: "SettleSheets",
                keyColumn: "SettleSheetId",
                keyValue: 1L,
                column: "barSplit",
                value: 0f);

            migrationBuilder.UpdateData(
                table: "SettleSheets",
                keyColumn: "SettleSheetId",
                keyValue: 2L,
                column: "barSplit",
                value: 0f);
        }
    }
}
