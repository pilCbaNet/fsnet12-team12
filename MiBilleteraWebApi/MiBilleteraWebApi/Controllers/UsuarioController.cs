using MiBilleteraWebApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiBilleteraWebApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {
    // GET: OBTENER USUARIOS
    [HttpGet]
    public List<Usuario> Get()
    {
      using (var db = new MiBilleteraContext())
      {
        return db.Usuarios.ToList();
      }
    }

    // POST AGREGAR USUARIO
    [HttpPost]
    public void Post([FromBody] Usuario oUsuarios)
    {
      using(var db = new MiBilleteraContext())
      {
        db.Usuarios.Add(oUsuarios);
        db.SaveChanges();
      }
    }

    //// PUT api/<UsuarioController>/5
    //[HttpPut("{id}")]
    //public void Put(int id, [FromBody] string value)
    //{
    //}

    //// DELETE api/<UsuarioController>/5
    //[HttpDelete("{id}")]
    //public void Delete(int id)
    //{
    //}
  }
}
