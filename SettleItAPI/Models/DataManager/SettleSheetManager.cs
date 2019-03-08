using System.Collections.Generic;
using System.Linq;
using SettleItAPI.Models.Repository;

namespace SettleItAPI.Models.DataManager
{
  public class SettleSheetManager : IDataRepository<SettleSheet>
  {
    readonly SettleSheetContext _settleSheetContext;

    public SettleSheetManager(SettleSheetContext context)
    {
      _settleSheetContext = context;
    }

    public IEnumerable<SettleSheet> GetAll()
    {
      return _settleSheetContext.SettleSheets.ToList();
    }

    public SettleSheet Get(long id)
    {
      return _settleSheetContext.SettleSheets.FirstOrDefault(e => e.SettleSheetId == id);
    }

    public void Add(SettleSheet entity)
    {
      _settleSheetContext.SettleSheets.Add(entity);
      _settleSheetContext.SaveChanges();
    }

    public void Update(SettleSheet settleSheet, SettleSheet entity)
    {
      settleSheet.DateCreated = entity.DateCreated;
      settleSheet.DateOfShow = entity.DateOfShow;
      settleSheet.HeadlinerBand = entity.HeadlinerBand;
      settleSheet.VenueName = entity.VenueName;

      _settleSheetContext.SaveChanges();
    }

    public void Delete(SettleSheet settleSheet)
    {
      _settleSheetContext.SettleSheets.Remove(settleSheet);
      _settleSheetContext.SaveChanges();
    }
  }
}
