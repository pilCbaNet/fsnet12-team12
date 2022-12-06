using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Cuenta
    {
        public Cuenta()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdCuenta { get; set; }
        public int Saldo { get; set; }
        public string Tipo { get; set; } = null!;

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
