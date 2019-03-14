﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SettleItAPI.Models;

namespace SettleItAPI.Migrations
{
    [DbContext(typeof(SettleSheetContext))]
    [Migration("20190313153041_FixColumnNamingConvention")]
    partial class FixColumnNamingConvention
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.Property<decimal>("BarSplit")
                        .HasConversion(new ValueConverter<decimal, decimal>(v => default(decimal), v => default(decimal), new ConverterMappingHints(precision: 38, scale: 17)))
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("DateCreated");

                    b.Property<string>("DateOfShow");

                    b.Property<decimal>("GrossBarSales")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("HeadlinerBand");

                    b.Property<decimal>("StageOverheadCost")
                        .HasColumnType("decimal(18,4)");

                    b.Property<decimal>("TicketPrice")
                        .HasColumnType("decimal(18,4)");

                    b.Property<int>("TicketsSold");

                    b.Property<string>("VenueName");

                    b.HasKey("SettleSheetId");

                    b.ToTable("SettleSheets");

                    b.HasData(
                        new { SettleSheetId = 1L, BarSplit = 0m, DateCreated = "2019-03-08", DateOfShow = "2019-03-19", GrossBarSales = 0m, HeadlinerBand = "Stargasm", StageOverheadCost = 0m, TicketPrice = 0m, TicketsSold = 0, VenueName = "Doug Fir Lounge" },
                        new { SettleSheetId = 2L, BarSplit = 0m, DateCreated = "2019-03-08", DateOfShow = "2019-03-27", GrossBarSales = 0m, HeadlinerBand = "Gabby Holt", StageOverheadCost = 0m, TicketPrice = 0m, TicketsSold = 0, VenueName = "Dante's" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}