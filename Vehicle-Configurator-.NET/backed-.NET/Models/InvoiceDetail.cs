using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("invoice_detail")]
[Index("CompId", Name = "FK5s9brexbb6mpqno76lu4r0kq4")]
[Index("InvId", Name = "FKckt5u57libgdv8ot4vq1o46sr")]
public partial class InvoiceDetail
{
    [Key]
    [Column("invdtl_id")]
    public int InvdtlId { get; set; }

    [Column("comp_id")]
    public int CompId { get; set; }

    [Column("inv_id")]
    public int InvId { get; set; }

    [ForeignKey("CompId")]
    [InverseProperty("InvoiceDetails")]
    public virtual Component Comp { get; set; } = null!;

    [ForeignKey("InvId")]
    [InverseProperty("InvoiceDetails")]
    public virtual Invoice Inv { get; set; } = null!;
}
