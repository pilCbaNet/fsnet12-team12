using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class TipoOperacion
    {
        public TipoOperacion()
        {
            Operaciones = new HashSet<Operaciones>();
        }

        public int IdTipoOperacion { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Operaciones> Operaciones { get; set; }
    }
}
