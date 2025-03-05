using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("invoice")]
[Index("ModelId", Name = "FK214mtkwyavatq8mnv7we724b5")]
public partial class Invoice
{
    [Key]
    [Column("inv_id")]
    public int InvId { get; set; }

    [Column("amt")]
    public double? Amt { get; set; }

    [Column("component_details")]
    [MaxLength(255)]
    public byte[]? ComponentDetails { get; set; }

    [Column("inv_date")]
    public DateOnly? InvDate { get; set; }

    [Column("tax")]
    public double? Tax { get; set; }

    [Column("total_amt")]
    public double? TotalAmt { get; set; }

    [Column("model_id")]
    public int? ModelId { get; set; }

    [InverseProperty("Inv")]
    public virtual ICollection<InvoiceDetail> InvoiceDetails { get; set; } = new List<InvoiceDetail>();

    [ForeignKey("ModelId")]
    [InverseProperty("Invoices")]
    public virtual Model? Model { get; set; }
}
