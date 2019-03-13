using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SettleItAPI.Models
{
  public class SettleSheet
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long SettleSheetId { get; set; }
    public string DateCreated { get; set; }
    public string DateOfShow { get; set; }
    public string HeadlinerBand { get; set; }
    public string VenueName { get; set; }
		public int TicketsSold { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal TicketPrice { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal GrossBarSales { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public float BarSplit { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal StageOverheadCost { get; set; }
	}
}
