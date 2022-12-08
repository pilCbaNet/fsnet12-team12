using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Retiro
    {
        public decimal Monto { get; set; }
        public string DniRetiro { get; set; } = null!;
    }
}
