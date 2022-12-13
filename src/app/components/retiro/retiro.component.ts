import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Retiros } from 'app/models/retiros';
import { MovimientosService } from 'app/servicios/movimientos/movimientos.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css'],
})
export class RetiroComponent implements OnInit {
  getRandom(): void {
    alert(Math.round(Math.random() * 1000));
  }
  movimientos: any = [];
  form!: FormGroup;
  codigo: any;

  constructor(
    private service: MovimientosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(1)]],
      dniRetiro: ['', []],
    });
  }

  ngOnInit(): void {
    this.service.obtenerMovimientos().subscribe((data) => {
      this.movimientos = data;
    });
  }

  get monto() {
    return this.form.get('monto');
  }

  get dniRetiro() {
    return this.form.get('dniRetiro');
  }

  withdraw() {
    let monto = this.form.get('monto')?.value;

    let dniRetiro = this.form.get('dniRetiro')?.value;

    let user: any = localStorage.getItem('user');
    let idUsuario: number = 0;
    if (user != null) {
      let userData: any = JSON.parse(user);
      idUsuario = userData.idUsuario;
    }

    let retiro: Retiros = new Retiros(monto, dniRetiro, idUsuario);
    this.redirect();

    this.service.guardarRetiro(retiro).subscribe((dataOk) => {
      this.router.navigate(['retiro']);
    });
  }
  redirect() {
    this.router.navigate(['dashboard']);
  }
}
