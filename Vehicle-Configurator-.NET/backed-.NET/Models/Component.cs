using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("component")]
public partial class Component
{
    [Key]
    [Column("comp_id")]
    [JsonPropertyName("comp_id")]
    public int CompId { get; set; }

    [Column("comp_name")]
    [JsonPropertyName("comp_name")]
    [StringLength(255)]
    public string? CompName { get; set; }

    [InverseProperty("AltComp")]
    [JsonIgnore]
    public virtual ICollection<AlternateComponent> AlternateComponentAltComps { get; set; } = new List<AlternateComponent>();

    [InverseProperty("Comp")]
    [JsonIgnore]
    public virtual ICollection<AlternateComponent> AlternateComponentComps { get; set; } = new List<AlternateComponent>();

    [InverseProperty("Comp")]
    [JsonIgnore]
    public virtual ICollection<InvoiceDetail> InvoiceDetails { get; set; } = new List<InvoiceDetail>();

    [InverseProperty("Comp")]
    [JsonIgnore]
    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
