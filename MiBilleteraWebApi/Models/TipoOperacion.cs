using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class TipoOperacion
    {
        public TipoOperacion()
        {
            Operaciones = new HashSet<Operacione>();
        }

        public int IdTipoOperacion { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Operacione> Operaciones { get; set; }
    }
}
