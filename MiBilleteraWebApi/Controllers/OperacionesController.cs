using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiBilleteraWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionesController : ControllerBase
    {
        // GET: api/<OperacionesController>/4
        [HttpGet("{idUsuario}")]
        public List<Operaciones> GetList(int idUsuario)
        {
            using (var db = new MiBilleteraContext())
            {
                return db.Operaciones.Include(a => a.IdTipoOperacionNavigation).Where(x => x.IdUsuario == idUsuario).ToList();
            }
        }

        // GET api/<OperacionesController>/5/3
        [HttpGet("{idUsuario}/{idOperacion}")]
        public Operaciones GetById(int idUsuario, int idOperacion)
        {
            using (var db = new MiBilleteraContext())
            {
                return db.Operaciones.Include(a => a.IdTipoOperacionNavigation).Where(x => x.IdUsuario == idUsuario).FirstOrDefault(a => a.IdOperaciones == idOperacion);
            }
        }

        // POST api/<OperacionesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<OperacionesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OperacionesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
