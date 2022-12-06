using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class Operacione
    {
        public int IdOperaciones { get; set; }
        public decimal Monto { get; set; }
        public DateTime Fecha { get; set; }
        public int IdTipoOperacion { get; set; }
        public int IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
