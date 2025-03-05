using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("manufacturer")]
[Index("SegId", Name = "FKa91vd0u6phxic78difo3yejmo")]
public partial class Manufacturer
{
    [Key]
    [Column("mfg_id")]
    [JsonPropertyName("mfg_id")]
    public int MfgId { get; set; }

    [Column("mfg_name")]
    [StringLength(255)]
    [JsonPropertyName("mfg_name")]
    public string MfgName { get; set; } = null!;

    [Column("seg_id")]
    [JsonIgnore]
    public int SegId { get; set; }

    [InverseProperty("Mfg")]
    [JsonIgnore]
    public virtual ICollection<Model> Models { get; set; } = new List<Model>();

    [ForeignKey("SegId")]
    [InverseProperty("Manufacturers")]
    [JsonPropertyName("seg_id")]

    public virtual Segment Seg { get; set; } = null!;
}
