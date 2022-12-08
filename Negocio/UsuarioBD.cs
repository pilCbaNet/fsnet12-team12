using System;
using Entities;
using System.Collections.Generic;
using Linq;
using Text;
using System.Threading.Tasks;

public class UsuarioBD
{
	public UsuarioBD()
	{
		public Usuarios login(MiBilleteraContext bd, string Email, string Contraseña)
		{
			return (Usuarios?) bd.Usuarios.FirstOrDefault(a => a.Email == Email && a.Contraseña == Contraseña)
		}
	}
}
