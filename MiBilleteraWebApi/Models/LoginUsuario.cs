using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class LoginUsuario
    {
        public string Email { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
    }
}
