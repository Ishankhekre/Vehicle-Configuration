//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Text.Json.Serialization;
//using Microsoft.EntityFrameworkCore;

//namespace backed_.NET.Models;

//[Keyless]
//[Table("invoicedto_components")]
//[Index("InvoicedtoId", Name = "FK87b1mtmbi19ekbarqwuxipjqq")]
//public partial class InvoicedtoComponent
//{
//    [Column("invoicedto_id")]
    
//    public long InvoicedtoId { get; set; }

//    [Column("components")]
//    [StringLength(255)]

//    public string? Components { get; set; }

//    [ForeignKey("InvoicedtoId")]
    
//    public virtual Invoicedto Invoicedto { get; set; } = null!;
//}
