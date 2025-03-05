using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Models;

[Table("user")]
[Index("GstNumber", Name = "UKl02bxosrn0mgunnaoy483hgmf", IsUnique = true)]
[Index("Email", Name = "UKob8kqyqqgmefl0aco34akdtpe", IsUnique = true)]
[Index("Username", Name = "UKsb8bbouer5wak8vyiiy4pf2bx", IsUnique = true)]
public partial class User
{
    [Key]
    [Column("user_id")]
    public long UserId { get; set; }

    [Column("address_line1")]
    [StringLength(255)]
    public string AddressLine1 { get; set; } = null!;

    [Column("address_line2")]
    [StringLength(255)]
    public string? AddressLine2 { get; set; }

    [Column("authorized_person_name")]
    [StringLength(255)]
    public string AuthorizedPersonName { get; set; } = null!;

    [Column("city")]
    [StringLength(255)]
    public string City { get; set; } = null!;

    [Column("company_name")]
    [StringLength(255)]
    public string CompanyName { get; set; } = null!;

    [Column("contact_number")]
    [StringLength(255)]
    public string ContactNumber { get; set; } = null!;

    [Column("designation")]
    [StringLength(255)]
    public string Designation { get; set; } = null!;

    [Column("email")]
    public string Email { get; set; } = null!;

    [Column("gst_number")]
    public string GstNumber { get; set; } = null!;

    [Column("password")]
    [StringLength(255)]
    public string Password { get; set; } = null!;

    [Column("pincode")]
    [StringLength(255)]
    public string Pincode { get; set; } = null!;

    [Column("state")]
    [StringLength(255)]
    public string State { get; set; } = null!;

    [Column("telephone")]
    [StringLength(255)]
    public string? Telephone { get; set; }

    [Column("username")]
    public string Username { get; set; } = null!;


    public User()
    {

    }

    public User(string username, string password)
    {
        Username = username;
        Password = password;
    }



}
