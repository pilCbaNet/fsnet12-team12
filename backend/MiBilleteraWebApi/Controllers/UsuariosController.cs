using Entities;
using Microsoft.AspNetCore.Mvc;
using Negocio;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiBilleteraWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        // GET: OBTENER USUARIOS
        [HttpGet]
        public List<Usuarios> Get()
        {
         
            return new UsuarioBD().ListarUsuarios();
            
        }

        // POST AGREGAR USUARIO
        [HttpPost]
        public void Post([FromBody] Usuarios oUsuarios)
        {
            using (var db = new MiBilleteraContext())
            {
                db.Usuarios.Add(oUsuarios);

                Cuentas oCuentas = new Cuentas();
                oCuentas.Saldo = 0;
                oCuentas.Alias = "Alias cuenta nueva";
                db.Cuentas.Add(oCuentas);
                db.SaveChanges();

                oUsuarios.IdCuenta = oCuentas.IdCuenta;
                db.SaveChanges();
            }
        }


        [HttpPost]
        [Route("/api/login")]
        public Usuarios Post([FromBody] VistaLoginUsuario oUsuarios)
        {
            Usuarios usuarioResoult;
            using (var db = new MiBilleteraContext())
            {
                usuarioResoult = new UsuarioBD().Login(db,oUsuarios.Email, oUsuarios.Contraseña);
            }
            return usuarioResoult;
        }
        //// GET: api/<UsuariosController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<UsuariosController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<UsuariosController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<UsuariosController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<UsuariosController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
