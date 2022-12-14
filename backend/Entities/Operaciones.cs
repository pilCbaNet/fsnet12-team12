using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Operaciones
    {
        public int IdOperaciones { get; set; }
        public decimal Monto { get; set; }
        public DateTime Fecha { get; set; }
        public int IdTipoOperacion { get; set; }
        public int IdUsuario { get; set; }
        public string DniRetiro { get; set; } = null!;

        public virtual TipoOperacion IdTipoOperacionNavigation { get; set; } = null!;
        public virtual Usuarios IdUsuarioNavigation { get; set; } = null!;
    }
}
