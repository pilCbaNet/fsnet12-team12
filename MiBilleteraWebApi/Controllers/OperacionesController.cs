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
        // GET: api/<OperacionesController>
        [HttpGet]
        public List<Operaciones> Get()
        {
            using (var db = new MiBilleteraContext())
            {
                return db.Operaciones.Include(a => a.IdTipoOperacionNavigation).ToList();
            }
        }

        // GET api/<OperacionesController>/5
        [HttpGet("{id}")]
        public Operaciones Get(int id)
        {
            using (var db = new MiBilleteraContext())
            {
                return db.Operaciones.Include(a => a.IdTipoOperacionNavigation).FirstOrDefault(a => a.IdOperaciones == id);
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
