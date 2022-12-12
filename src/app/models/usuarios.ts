
 export class Usuarios {
  Nombre: string;
  Apellido:string;
  FechaNacimiento: any;
  Email: string;
  Usuario1: string;
  Contraseña: string;
  Telefono: string;
  Domicilio: string;
  Dni: string;
  IdCuenta:number;

  constructor(
    Nombre: string,
    Apellido:string,
    FechaNacimiento: any,
    Email: string,
    Usuario1: string,
    Contraseña: string,
    Telefono: string,
    Domicilio: string,
    Dni: string,
    IdCuenta:number
  ) {
    this.Nombre = Nombre;
    this.Apellido=Apellido;
    this.FechaNacimiento = FechaNacimiento;
    this.Email = Email;
    this.Usuario1 = Usuario1;
    this.Contraseña = Contraseña;
    this.Telefono = Telefono;
    this.Domicilio = Domicilio;
    this.Dni = Dni;
    this.IdCuenta= IdCuenta;
  }
}
 