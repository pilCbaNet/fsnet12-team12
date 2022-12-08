using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Cuentas
    {
        public int IdCuenta { get; set; }
        public int Saldo { get; set; }
        public string Alias { get; set; } = null!;
    }
}
