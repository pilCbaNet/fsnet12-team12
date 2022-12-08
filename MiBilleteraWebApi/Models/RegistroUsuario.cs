using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class RegistroUsuario
    {
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public DateTime FechaNacimiento { get; set; }
        public string Email { get; set; } = null!;
        public string Usuario { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Domicilio { get; set; } = null!;
        public string Dni { get; set; } = null!;
    }
}
