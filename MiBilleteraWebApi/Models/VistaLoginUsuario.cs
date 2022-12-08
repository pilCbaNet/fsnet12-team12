using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class VistaLoginUsuario
    {
        public string Email { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
    }
}
