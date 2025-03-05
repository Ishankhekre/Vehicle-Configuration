using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;


public enum CompType
{
    C,
    E,
    I,
    S
}

public enum IsConfigurable
{
    N,
    Y
}

[Table("vehicle")]
[Index("ModelId", Name = "FK27cc9wpp4hrwtmjyew3ln1pw3")]
[Index("CompId", Name = "FKsa5e1l7iqlfcfeteqs7osy4ey")]
public partial class Vehicle
{
    [Key]
    [Column("confi_id")]
    public int ConfiId { get; set; }

    [Column("comp_type")]
    public CompType CompType { get; set; }

    [Column("is_configrable")]
    public IsConfigurable IsConfigrable { get; set; }

    [Column("comp_id")]
    public int CompId { get; set; }

    [Column("model_id")]
    public int? ModelId { get; set; }

    [ForeignKey("CompId")]
    [InverseProperty("Vehicles")]
    public virtual Component Comp { get; set; } = null!;

    [ForeignKey("ModelId")]
    [InverseProperty("Vehicles")]
    public virtual Model? Model { get; set; }
}
