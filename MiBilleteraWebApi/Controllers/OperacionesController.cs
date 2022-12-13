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

        // POST api/<OperacionesController>/Retiro
        [HttpPost("Retiro")]
        public void Post([FromBody] VistaRetiro vistaRetiro)
        {
            using (var db = new MiBilleteraContext())
            {
                TipoOperacion result = db.TipoOperacions.FirstOrDefault(a => a.Descripcion == "Retiro de efectivo");
                Usuarios userResult = db.Usuarios.FirstOrDefault(a => a.IdUsuario == vistaRetiro.idUsuario);

                if (result == null)
                {
                    TipoOperacion nuevaOperacion = new TipoOperacion();
                    nuevaOperacion.Descripcion = "Retiro de efectivo";
                    db.TipoOperacions.Add(nuevaOperacion);
                    db.SaveChanges();
                    result = db.TipoOperacions.FirstOrDefault(a => a.Descripcion == "Retiro de efectivo");
                }
                Operaciones oOperacion = new Operaciones();

                oOperacion.Monto = vistaRetiro.Monto;
                oOperacion.Fecha = DateTime.Now;
                oOperacion.DniRetiro = vistaRetiro.DniRetiro;
                oOperacion.IdUsuario = vistaRetiro.idUsuario;
                oOperacion.IdTipoOperacion = result.IdTipoOperacion;
                oOperacion.IdTipoOperacionNavigation = result;
                oOperacion.IdUsuarioNavigation = userResult;

                Cuentas accountResult = db.Cuentas.FirstOrDefault(a => a.IdCuenta == userResult.IdCuenta);
                accountResult.Saldo -= decimal.ToInt32(vistaRetiro.Monto);

                db.Operaciones.Add(oOperacion);
                db.SaveChanges();
            }
        }

        // POST api/<OperacionesController>/Deposito
        [HttpPost("Deposito")]
        public void Post([FromBody] VistaDeposito vistaDeposito)
        {
            using (var db = new MiBilleteraContext())
            {
                TipoOperacion result = db.TipoOperacions.FirstOrDefault(a => a.Descripcion == "Deposito en efectivo");
                Usuarios userResult = db.Usuarios.FirstOrDefault(a => a.IdUsuario == vistaDeposito.idUsuario);

                if (result == null)
                {
                    TipoOperacion nuevaOperacion = new TipoOperacion();
                    nuevaOperacion.Descripcion = "Deposito en efectivo";
                    db.TipoOperacions.Add(nuevaOperacion);
                    db.SaveChanges();
                    result = db.TipoOperacions.FirstOrDefault(a => a.Descripcion == "Deposito en efectivo");
                }
                Operaciones oOperacion = new Operaciones();

                oOperacion.Monto = vistaDeposito.Monto;
                oOperacion.Fecha = DateTime.Now;
                oOperacion.DniRetiro = vistaDeposito.DniRetiro;
                oOperacion.IdUsuario = vistaDeposito.idUsuario;
                oOperacion.IdTipoOperacion = result.IdTipoOperacion;
                oOperacion.IdTipoOperacionNavigation = result;
                oOperacion.IdUsuarioNavigation = userResult;

                Cuentas accountResult = db.Cuentas.FirstOrDefault(a => a.IdCuenta == userResult.IdCuenta);
                accountResult.Saldo += decimal.ToInt32(vistaDeposito.Monto);

                db.Operaciones.Add(oOperacion);
                db.SaveChanges();
            }
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
