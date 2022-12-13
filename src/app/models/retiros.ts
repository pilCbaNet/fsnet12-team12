export class Retiros {
  monto: number;
  dniRetiro: string;
  idUsuario: number;

  constructor(monto: number, dniRetiro: string, idUsuario: number) {
    this.monto = monto;
    this.dniRetiro = dniRetiro;
    this.idUsuario = idUsuario;
  }
}
