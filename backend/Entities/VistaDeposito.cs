using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class VistaDeposito
    {
        public decimal Monto { get; set; }
        public string DniRetiro { get; set; } = null!;
        public int idUsuario { get; set; }
    }
}
