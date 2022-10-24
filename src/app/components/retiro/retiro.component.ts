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
      console.log(this.movimientos);
    });
  }
  deposit() {
    let date: string = '24/10/2022';
    let mount: number = 1000 ;

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

    this.service.guardarRetiro(retiro).subscribe((dataOk) => {
      console.log('retiro');
      this.router.navigate(['retiro']);
    });
  }
}