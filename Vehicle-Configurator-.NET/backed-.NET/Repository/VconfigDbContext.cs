using System;
using System.Collections.Generic;
using backed_.NET.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace backed_.NET.Repository;

public partial class VconfigDbContext : DbContext
{
    public VconfigDbContext()
    {
    }

    public VconfigDbContext(DbContextOptions<VconfigDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AlternateComponent> AlternateComponents { get; set; }

    public virtual DbSet<Component> Components { get; set; }

    public virtual DbSet<Invoice> Invoices { get; set; }

    public virtual DbSet<InvoiceDetail> InvoiceDetails { get; set; }

    //public virtual DbSet<Invoicedto> Invoicedtos { get; set; }

    //public virtual DbSet<InvoicedtoComponent> InvoicedtoComponents { get; set; }

    public virtual DbSet<Manufacturer> Manufacturers { get; set; }

    public virtual DbSet<Model> Models { get; set; }

    public virtual DbSet<Segment> Segments { get; set; }

    public virtual DbSet<User> Users { get; set; }

    //public virtual DbSet<Userdto> Userdtos { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=vconfig;user=root;password=root", ServerVersion.Parse("8.0.40-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<AlternateComponent>(entity =>
        {
            entity.HasKey(e => e.AltId).HasName("PRIMARY");

            entity.HasOne(d => d.AltComp).WithMany(p => p.AlternateComponentAltComps)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKfrq37y1cv7my8kmj0d6f2m2ua");

            entity.HasOne(d => d.Comp).WithMany(p => p.AlternateComponentComps)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKmf97r6xj5y8avpivxdgo4h8eh");

            entity.HasOne(d => d.Model).WithMany(p => p.AlternateComponents)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKpicof3xyphodal8wq0mj6uquo");
        });

        modelBuilder.Entity<Component>(entity =>
        {
            entity.HasKey(e => e.CompId).HasName("PRIMARY");
        });

        modelBuilder.Entity<Invoice>(entity =>
        {
            entity.HasKey(e => e.InvId).HasName("PRIMARY");

            entity.HasOne(d => d.Model).WithMany(p => p.Invoices).HasConstraintName("FK214mtkwyavatq8mnv7we724b5");
        });

        modelBuilder.Entity<InvoiceDetail>(entity =>
        {
            entity.HasKey(e => e.InvdtlId).HasName("PRIMARY");

            entity.HasOne(d => d.Comp).WithMany(p => p.InvoiceDetails)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK5s9brexbb6mpqno76lu4r0kq4");

            entity.HasOne(d => d.Inv).WithMany(p => p.InvoiceDetails)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKckt5u57libgdv8ot4vq1o46sr");
        });

        //modelBuilder.Entity<Invoicedto>(entity =>
        //{
        //    entity.HasKey(e => e.Id).HasName("PRIMARY");

        //    entity.HasOne(d => d.UserName1Navigation).WithMany(p => p.Invoicedtos)
        //        .HasPrincipalKey(p => p.UserName)
        //        .HasForeignKey(d => d.UserName1)
        //        .OnDelete(DeleteBehavior.ClientSetNull)
        //        .HasConstraintName("FKef385crv7994g0ck2v85se21p");
        //});

        //modelBuilder.Entity<InvoicedtoComponent>(entity =>
        //{
        //    entity.HasOne(d => d.Invoicedto).WithMany()
        //        .OnDelete(DeleteBehavior.ClientSetNull)
        //        .HasConstraintName("FK87b1mtmbi19ekbarqwuxipjqq");
        //});

        modelBuilder.Entity<Manufacturer>(entity =>
        {
            entity.HasKey(e => e.MfgId).HasName("PRIMARY");

            entity.HasOne(d => d.Seg).WithMany(p => p.Manufacturers)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKa91vd0u6phxic78difo3yejmo");
        });

        modelBuilder.Entity<Model>(entity =>
        {
            entity.HasKey(e => e.ModelId).HasName("PRIMARY");

            entity.HasOne(d => d.Mfg).WithMany(p => p.Models).HasConstraintName("FKa9twxcy0350gsjcar771xuk2d");

            entity.HasOne(d => d.Seg).WithMany(p => p.Models).HasConstraintName("FKhldm2r9ujahkkawo940pq9j7r");
        });

        modelBuilder.Entity<Segment>(entity =>
        {
            entity.HasKey(e => e.SegId).HasName("PRIMARY");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");
        });

        //modelBuilder.Entity<Userdto>(entity =>
        //{
        //    entity.HasKey(e => e.Userid).HasName("PRIMARY");
        //});

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.ConfiId).HasName("PRIMARY");

            entity.Property(e => e.CompType)
                .HasConversion<string>();

            entity.Property(e => e.IsConfigrable)
                .HasConversion<string>();

            entity.HasOne(d => d.Comp).WithMany(p => p.Vehicles)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKsa5e1l7iqlfcfeteqs7osy4ey");

            entity.HasOne(d => d.Model).WithMany(p => p.Vehicles).HasConstraintName("FK27cc9wpp4hrwtmjyew3ln1pw3");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
