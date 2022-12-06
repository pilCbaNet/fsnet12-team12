using System;
using System.Collections.Generic;

namespace MiBilleteraWebApi.Models
{
    public partial class TipoOperacion
    {
        public int IdTipoOperacion { get; set; }
        public string Descripcion { get; set; } = null!;
    }
}
