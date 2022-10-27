import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deposito } from 'app/models/deposito';
import { DepositoService } from 'app/servicios/deposito/deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  cuentas:any = [];
  form:FormGroup
  codigo:any;
  
  constructor(private service:DepositoService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      montoDeposito: ['', [Validators.required, Validators.min(1)]]
    })
   }

  ngOnInit(): void {
    this.service.obtenerDatosCuenta().subscribe(data => {
      console.log(data);
      this.cuentas = data;
    })
  }

  realizarDeposito()
  {
    if(this.form.valid)
    {
      this.codigo = this.generarCodigo();
      let montoDepositado = this.form.get('montoDeposito')?.value;
      let deposito:Deposito = new Deposito(montoDepositado,this.codigo);
      this.service.guardarDeposito(deposito).subscribe({
        next:(v) => {
          this.cuentas[0].saldo = this.cuentas[0].saldo + montoDepositado;
          alert("El depósito se ha realizado con éxito");
          this.codigo = "";
          this.form.reset();
        },
        error:(e) => {
          alert("Se ha producido un error. Por favor intente nuevamente y/o consulte al administrador");
          }
      }
      )
    }

    else
    {
      this.form.markAllAsTouched();
    }
    
  }

  private generarCodigo():number
  {
    let codigo:number = Math.round(Math.random() * 1000)
    return codigo;
  }
}
