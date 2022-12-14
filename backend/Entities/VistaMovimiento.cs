using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class VistaMovimiento
    {
        public int IdOperaciones { get; set; }
        public DateTime Fecha { get; set; }
        public string Descripcion { get; set; } = null!;
        public decimal Monto { get; set; }
        public int Saldo { get; set; }
    }
}
