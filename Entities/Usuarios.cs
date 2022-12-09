using System;
using System.Collections.Generic;
using Entities;

namespace Entities
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Operaciones = new HashSet<Operaciones>();
        }

        public int IdUsuario { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public DateTime FechaNacimiento { get; set; }
        public string Email { get; set; } = null!;
        public string Usuario1 { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaBaja { get; set; }
        public string Domicilio { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public int IdCuenta { get; set; }

        public virtual ICollection<Operaciones> Operaciones { get; set; }
    }
}
