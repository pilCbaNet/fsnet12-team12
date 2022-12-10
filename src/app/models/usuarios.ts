export class Usuarios {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  email: string;
  usuario1: string;
  constraseña: string;
  telefono: string;
  fechaAlta: Date;
  fechaBaja: any;
  domicilio: string;
  dni: string;
  idCuenta: number;

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    email: string,
    usuario1: string,
    constraseña: string,
    telefono: string,
    fechaAlta: Date,
    fechaBaja: any,
    domicilio: string,
    dni: string,
    idCuenta: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.usuario1 = usuario1;
    this.constraseña = constraseña;
    this.telefono = telefono;
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
    this.domicilio = domicilio;
    this.dni = dni;
    this.idCuenta = idCuenta;
  }
}
