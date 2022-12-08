using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Cuenta
    {
        public int IdCuenta { get; set; }
        public int Saldo { get; set; }
        public string Alias { get; set; } = null!;
    }
}
