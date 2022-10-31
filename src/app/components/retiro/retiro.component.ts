import { Component, OnInit } from '@angular/core';
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
  constructor(private service: MovimientosService, private router: Router) {}

  ngOnInit(): void {
    this.service.obtenerMovimientos().subscribe((data) => {
      this.movimientos = data;
    });
  }
  deposit() {
    let today = new Date();
    let date = today.toLocaleString('es-AR');

    let mount: number = 1000;

    let description: string = 'Withdraw cash';
    let accountNumber = '1234567890';
    let accountName = 'Tania';

    let retiro: Retiros = new Retiros(
      date,
      mount,
      description,
      accountNumber,
      accountName
    );
    this.redirect();

    this.service.guardarRetiro(retiro).subscribe((dataOk) => {
      this.router.navigate(['retiro']);
    });
  }
  redirect() {
    this.router.navigate(['dashboard']);
  }
}
