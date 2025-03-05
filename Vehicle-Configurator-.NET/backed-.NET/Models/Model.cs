using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("model")]
[Index("MfgId", Name = "FKa9twxcy0350gsjcar771xuk2d")]
[Index("SegId", Name = "FKhldm2r9ujahkkawo940pq9j7r")]
public partial class Model
{
    [Key]
    [Column("model_id")]
    [JsonPropertyName("model_id")]
    public int ModelId { get; set; }

    [Column("image_path")]
    [StringLength(255)]
    [JsonPropertyName("image_path")]
    public string ImagePath { get; set; } = null!;

    [Column("mdl_name")]
    [StringLength(255)]
    [JsonPropertyName("mdl_name")]
    public string MdlName { get; set; } = null!;

    [Column("min_qty")]
    [JsonPropertyName("min_qty")]
    public int MinQty { get; set; }

    [Column("price")]
    [JsonPropertyName("price")]
    public double Price { get; set; }

    [Column("mfg_id")]
    [JsonIgnore]
    public int? MfgId { get; set; }

    [Column("seg_id")]
    [JsonIgnore]
    public int? SegId { get; set; }

    [InverseProperty("Model")]
    [JsonIgnore]
    public virtual ICollection<AlternateComponent> AlternateComponents { get; set; } = new List<AlternateComponent>();

    [InverseProperty("Model")]
    [JsonIgnore]
    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    [ForeignKey("MfgId")]
    [InverseProperty("Models")]
    [JsonPropertyName("manufacturer")]
    public virtual Manufacturer? Mfg { get; set; }

    [ForeignKey("SegId")]
    [InverseProperty("Models")]
    [JsonPropertyName("segment")]
    public virtual Segment? Seg { get; set; }

    [InverseProperty("Model")]
    [JsonIgnore]
    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
