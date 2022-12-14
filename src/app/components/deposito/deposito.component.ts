import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Deposito } from 'app/models/deposito';
import { DepositoService } from 'app/servicios/deposito/deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css'],
})
export class DepositoComponent implements OnInit {
  cuentas: any = [];
  form: FormGroup;
  codigo: any;

  constructor(
    private service: DepositoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(1)]],
      dniRetiro: ['', []],
    });
  }

  ngOnInit(): void {
    /*
    this.service.obtenerDatosCuenta().subscribe((data) => {
      console.log(data);
      this.cuentas = data;
    });*/
  }

  get monto() {
    return this.form.get('monto');
  }

  get dniRetiro() {
    return this.form.get('dniRetiro');
  }

  realizarDeposito() {
    if (this.form.valid) {
      this.codigo = this.generarCodigo();

      let monto = this.form.get('monto')?.value;

      let dniRetiro = this.form.get('dniRetiro')?.value;

      let user: any = localStorage.getItem('user');
      let idUsuario: number = 0;
      if (user != null) {
        let userData: any = JSON.parse(user);
        idUsuario = userData.idUsuario;
      }

      let deposito: Deposito = new Deposito(monto, dniRetiro, idUsuario);

      this.service.guardarDeposito(deposito).subscribe((dataOk) => {
        this.router.navigate(['dashboard']);
      });
      /*
      this.service.guardarDeposito(deposito).subscribe({
        next: (v) => {
          this.cuentas[0].saldo = this.cuentas[0].saldo + monto;
          alert('El depósito se ha realizado con éxito');
          this.codigo = '';
          this.form.reset();
        },
        error: (e) => {
          alert(
            'Se ha producido un error. Por favor intente nuevamente y/o consulte al administrador'
          );
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
    */
    }
  }

  private generarCodigo(): number {
    let codigo: number = Math.round(Math.random() * 1000);
    return codigo;
  }
}
