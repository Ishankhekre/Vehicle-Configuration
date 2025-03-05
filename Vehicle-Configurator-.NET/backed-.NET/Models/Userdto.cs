//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Text.Json.Serialization;
//using Microsoft.EntityFrameworkCore;

//namespace backed_.NET.Models;

//[Table("userdto")]
//[Index("UserName", Name = "UK6rfrh1et2idbhd3k2up739u8t", IsUnique = true)]
//public partial class Userdto
//{
//    [Key]
//    [Column("userid")]
//    public long Userid { get; set; }

//    [Column("company_name")]
//    [StringLength(255)]
//    public string CompanyName { get; set; } = null!;

//    [Column("contact_number")]
//    [StringLength(255)]
//    public string ContactNumber { get; set; } = null!;

//    [Column("email")]
//    [StringLength(255)]
//    public string Email { get; set; } = null!;

//    [Column("gst_number")]
//    [StringLength(255)]
//    public string GstNumber { get; set; } = null!;

//    [Column("user_name")]
//    public string UserName { get; set; } = null!;

//    [InverseProperty("UserName1Navigation")]
//    [JsonIgnore]
//    public virtual ICollection<Invoicedto> Invoicedtos { get; set; } = new List<Invoicedto>();
//}
