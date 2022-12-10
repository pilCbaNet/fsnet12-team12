export class Usuarios {
  nombre: string;
  fechaNacimiento: Date;
  email: string;
  usuario1: string;
  contraseña: string;
  telefono: string;
  domicilio: string;
  dni: string;
  idCuenta: number;

  constructor(
    nombre: string,
    fechaNacimiento: Date,
    email: string,
    usuario1: string,
    contraseña: string,
    telefono: string,
    domicilio: string,
    dni: string,
    idCuenta: number
  ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.usuario1 = usuario1;
    this.contraseña = contraseña;
    this.telefono = telefono;
    this.domicilio = domicilio;
    this.dni = dni;
    this.idCuenta = idCuenta;
  }
}
