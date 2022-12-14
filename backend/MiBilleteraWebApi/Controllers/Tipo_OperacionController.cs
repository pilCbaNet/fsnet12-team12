using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiBilleteraWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Tipo_OperacionController : ControllerBase
    {
        // GET: api/<Tipo_OperacionController>
        [HttpGet]
        public IEnumerable<TipoOperacion> Get()
        {
            using (var db = new MiBilleteraContext())
            {
                return db.TipoOperacions.ToList();
            }
        }

        // GET api/<Tipo_OperacionController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Tipo_OperacionController>
        [HttpPost]
        public void Post([FromBody] TipoOperacion oTipoOperacion)
        {
            using (var db = new MiBilleteraContext())
            {
                db.TipoOperacions.Add(oTipoOperacion);
                db.SaveChanges();
            }
        }

        // PUT api/<Tipo_OperacionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Tipo_OperacionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
