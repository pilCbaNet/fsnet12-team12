using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Entities
{
    public partial class MiBilleteraContext : DbContext
    {
        public MiBilleteraContext()
        {
        }

        public MiBilleteraContext(DbContextOptions<MiBilleteraContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cuentas> Cuentas { get; set; } = null!;
        public virtual DbSet<VistaDeposito> Depositos { get; set; } = null!;
        public virtual DbSet<VistaLoginUsuario> LoginUsuarios { get; set; } = null!;
        public virtual DbSet<VistaMovimiento> Movimientos { get; set; } = null!;
        public virtual DbSet<Operaciones> Operaciones { get; set; } = null!;
        public virtual DbSet<RegistroUsuario> RegistroUsuarios { get; set; } = null!;
        public virtual DbSet<VistaRetiro> Retiros { get; set; } = null!;
        public virtual DbSet<TipoOperacion> TipoOperacions { get; set; } = null!;
        public virtual DbSet<Usuarios> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=MAURICIO-PC; Database=MiBilletera; User=sa; Password=123456789; TrustServerCertificate=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cuentas>(entity =>
            {
                entity.HasKey(e => e.IdCuenta);

                entity.Property(e => e.IdCuenta).HasColumnName("Id_Cuenta");

                entity.Property(e => e.Alias)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VistaDeposito>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Deposito");

                entity.Property(e => e.Monto).HasColumnType("money");
            });

            modelBuilder.Entity<VistaLoginUsuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("LoginUsuario");

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VistaMovimiento>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Movimientos");

                entity.Property(e => e.Descripcion).HasMaxLength(50);

                entity.Property(e => e.Fecha).HasColumnType("date");

                entity.Property(e => e.IdOperaciones).HasColumnName("Id_Operaciones");

                entity.Property(e => e.Monto).HasColumnType("money");
            });

            modelBuilder.Entity<Operaciones>(entity =>
            {
                entity.HasKey(e => e.IdOperaciones);

                entity.Property(e => e.IdOperaciones).HasColumnName("Id_Operaciones");

                entity.Property(e => e.DniRetiro)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DNI_Retiro");

                entity.Property(e => e.Fecha).HasColumnType("date");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("Id_TipoOperacion");

                entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");

                entity.Property(e => e.Monto).HasColumnType("money");

                entity.HasOne(d => d.IdTipoOperacionNavigation)
                    .WithMany(p => p.Operaciones)
                    .HasForeignKey(d => d.IdTipoOperacion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Operaciones_Tipo_Operacion1");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Operaciones)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Operaciones_Usuarios");
            });

            modelBuilder.Entity<RegistroUsuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("RegistroUsuario");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dni)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DNI");

                entity.Property(e => e.Domicilio)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FechaNacimiento).HasColumnType("date");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Usuario)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VistaRetiro>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Retiro");

                entity.Property(e => e.DniRetiro)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DNI_Retiro");

                entity.Property(e => e.Monto).HasColumnType("money");
            });

            modelBuilder.Entity<TipoOperacion>(entity =>
            {
                entity.HasKey(e => e.IdTipoOperacion);

                entity.ToTable("Tipo_Operacion");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("Id_TipoOperacion");

                entity.Property(e => e.Descripcion).HasMaxLength(50);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK_Usuarios1");

                entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Contraseña)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dni)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DNI");

                entity.Property(e => e.Domicilio)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FechaAlta)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FechaBaja).HasColumnType("datetime");

                entity.Property(e => e.FechaNacimiento).HasColumnType("date");

                entity.Property(e => e.IdCuenta).HasColumnName("Id_Cuenta");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Usuario");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
