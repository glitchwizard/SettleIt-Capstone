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

		[Column(TypeName = "decimal(18,4)")]
		public decimal bandCutOfBarPercentage { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal finalNetIncome { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal grossBarSales { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal grossBarSplitPayout { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal grossTicketIncome { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal grossTicketSplitPayout { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal houseCutOfDoorPercentage { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal monetaryHouseCutOfBar { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal monetaryHouseCutOfDoor { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal stageOverheadCost { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal ticketPrice { get; set; }

		public int ticketsSoldQTY { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal totalGrossExpenses { get; set; }
		[Column(TypeName = "decimal(18,4)")]
		public decimal totalGrossIncome { get; set; }
	
	}
}
