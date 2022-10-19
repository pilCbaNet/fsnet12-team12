import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css'],
})
export class MovimientosComponent implements OnInit {
  movimientos: any = [
    {
      id: 1,
      date: '15/01/2022',
      mount: 1000,
      description: 'Deposit cash',
      accountNumber: '1234567890',
      accountName: 'Fernando Yañez',
    },
    {
      id: 2,
      date: '15/02/2022',
      mount: 2000,
      description: 'Transfer cash',
      accountNumber: '1234567891',
      accountName: 'Hortensia Marrero',
    },
    {
      id: 3,
      date: '15/03/2022',
      mount: 3000,
      description: 'Deposit cash',
      accountNumber: '1234567892',
      accountName: 'Iratxe Sancho',
    },
  ];
  now: any = new Date();

  constructor() {}

  ngOnInit(): void {}
}
