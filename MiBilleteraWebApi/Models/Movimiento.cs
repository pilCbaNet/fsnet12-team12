using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Movimiento
    {
        public int IdOperaciones { get; set; }
        public DateTime Fecha { get; set; }
        public string Descripcion { get; set; } = null!;
        public decimal Monto { get; set; }
        public int Saldo { get; set; }
    }
}
