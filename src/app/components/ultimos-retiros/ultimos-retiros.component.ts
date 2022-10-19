import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'app/servicios/movimientos/movimientos.service';

@Component({
  selector: 'app-ultimos-retiros',
  templateUrl: './ultimos-retiros.component.html',
  styleUrls: ['./ultimos-retiros.component.css'],
})
export class UltimosRetirosComponent implements OnInit {
  movimientos: any = [];
  // = [
  //   {
  //     id: 1,
  //     date: '15/01/2022',
  //     mount: -1000,
  //     description: 'Withdraw cash',
  //     accountNumber: '',
  //     accountName: '',
  //   },
  //   {
  //     id: 2,
  //     date: '15/02/2022',
  //     mount: 2000,
  //     description: 'Transfer cash',
  //     accountNumber: '1234567891',
  //     accountName: 'Hortensia Marrero',
  //   },
  //   {
  //     id: 3,
  //     date: '15/03/2022',
  //     mount: -3000,
  //     description: 'Withdraw cash',
  //     accountNumber: '',
  //     accountName: '',
  //   },
  //   {
  //     id: 4,
  //     date: '16/03/2022',
  //     mount: -8000,
  //     description: 'Withdraw cash',
  //     accountNumber: '',
  //     accountName: '',
  //   },
  // ];
  depositosOrdenados: any = [];
  saldo: any = 0;

  constructor(private service: MovimientosService) {}

  ngOnInit(): void {
    this.service.obtenerMovimientos().subscribe((data) => {
      this.movimientos = data;
      this.movimientosOrder();
    });
  }
  movimientosOrder() {
    for (let item of this.movimientos) {
      if (item.description === 'Withdraw cash') {
        this.saldo += item.mount;
        item.saldo = this.saldo;
      }
      this.depositosOrdenados.unshift(item);
    }
    console.log(this.depositosOrdenados);
    return this.depositosOrdenados;
  }
}
