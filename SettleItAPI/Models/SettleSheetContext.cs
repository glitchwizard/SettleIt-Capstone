using Microsoft.EntityFrameworkCore;

namespace SettleItAPI.Models
{
  public class SettleSheetContext : DbContext
  {
    public SettleSheetContext(DbContextOptions options)
      : base(options)
    { }

    public DbSet<SettleSheet> SettleSheets { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<SettleSheet>().HasData(
        new SettleSheet
        {
          SettleSheetId = 1,
          DateCreated = "2019-03-08",
          DateOfShow = "2019-03-19",
          HeadlinerBand = "Stargasm",
          VenueName = "Doug Fir Lounge"
        }, new SettleSheet
        {
          SettleSheetId = 2,
          DateCreated = "2019-03-08",
          DateOfShow = "2019-03-27",
          HeadlinerBand = "Gabby Holt",
          VenueName = "Dante's"
        }      
      );
    }
  }
}
