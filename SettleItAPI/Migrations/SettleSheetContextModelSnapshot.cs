﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SettleItAPI.Models;

namespace SettleItAPI.Migrations
{
    [DbContext(typeof(SettleSheetContext))]
    partial class SettleSheetContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SettleItAPI.Models.SettleSheet", b =>
                {
                    b.Property<long>("SettleSheetId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DateCreated");

                    b.Property<string>("DateOfShow");

                    b.Property<string>("HeadlinerBand");

                    b.Property<string>("VenueName");

                    b.Property<decimal>("bandCutOfBarPercentage")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("finalNetIncome")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("grossBarSales")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("grossBarSplitPayout")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("grossTicketIncome")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("grossTicketSplitPayout")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("houseCutOfDoorPercentage")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("monetaryHouseCutOfBar")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("monetaryHouseCutOfDoor")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("stageOverheadCost")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("ticketPrice")
                        .HasColumnType("decimal(18,4)");

                    b.Property<int>("ticketsSoldQTY");

                    b.Property<decimal>("totalGrossExpenses")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("totalGrossIncome")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("SettleSheetId");

                    b.ToTable("SettleSheets");

                    b.HasData(
                        new { SettleSheetId = 1L, DateCreated = "2019-03-08", DateOfShow = "2019-03-19", HeadlinerBand = "Stargasm", VenueName = "Doug Fir Lounge", bandCutOfBarPercentage = 0m, finalNetIncome = 0m, grossBarSales = 0m, grossBarSplitPayout = 0m, grossTicketIncome = 0m, grossTicketSplitPayout = 0m, houseCutOfDoorPercentage = 0m, monetaryHouseCutOfBar = 0m, monetaryHouseCutOfDoor = 0m, stageOverheadCost = 0m, ticketPrice = 0m, ticketsSoldQTY = 0, totalGrossExpenses = 0m, totalGrossIncome = 0m },
                        new { SettleSheetId = 2L, DateCreated = "2019-03-08", DateOfShow = "2019-03-27", HeadlinerBand = "Gabby Holt", VenueName = "Dante's", bandCutOfBarPercentage = 0m, finalNetIncome = 0m, grossBarSales = 0m, grossBarSplitPayout = 0m, grossTicketIncome = 0m, grossTicketSplitPayout = 0m, houseCutOfDoorPercentage = 0m, monetaryHouseCutOfBar = 0m, monetaryHouseCutOfDoor = 0m, stageOverheadCost = 0m, ticketPrice = 0m, ticketsSoldQTY = 0, totalGrossExpenses = 0m, totalGrossIncome = 0m }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
