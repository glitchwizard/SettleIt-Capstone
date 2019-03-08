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
    [Migration("20190308184009_InitialCreate")]
    partial class InitialCreate
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

                    b.Property<string>("DateCreated");

                    b.Property<string>("DateOfShow");

                    b.Property<string>("HeadlinerBand");

                    b.Property<string>("VenueName");

                    b.HasKey("SettleSheetId");

                    b.ToTable("SettleSheets");

                    b.HasData(
                        new { SettleSheetId = 1L, DateCreated = "2019-03-08", DateOfShow = "2019-03-19", HeadlinerBand = "Stargasm", VenueName = "Doug Fir Lounge" },
                        new { SettleSheetId = 2L, DateCreated = "2019-03-08", DateOfShow = "2019-03-27", HeadlinerBand = "Gabby Holt", VenueName = "Dante's" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
