﻿using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class UsuarioBD
    {
        MiBilleteraContext bd = new MiBilleteraContext();
       public List<Usuarios> ListarUsuarios()
        {
            return bd.Usuarios.ToList();
        }

    }
}
