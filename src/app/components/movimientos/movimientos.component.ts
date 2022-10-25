import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovimientosService } from 'app/servicios/movimientos/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css'],
})
export class MovimientosComponent implements OnInit {
  /*
  movimientos: any = [
    {
      id: 1,
      date: '15/01/2022',
      mount: 1000,
      description: 'Deposit cash',
      accountNumber: '1234567890',
      accountName: 'Fernando Yañez',
      type: 'Deposit',
    },
    {
      id: 2,
      date: '15/02/2022',
      mount: 2000,
      description: 'Transfer cash',
      accountNumber: '1234567891',
      accountName: 'Hortensia Marrero',
      type: 'Withdraw',
    },
    {
      id: 3,
      date: '15/03/2022',
      mount: 3000,
      description: 'Deposit cash',
      accountNumber: '1234567892',
      accountName: 'Iratxe Sancho',
      type: 'Deposit',
    },
  ];*/
  movimientos: any = [];
  reset: any;
  now: any = new Date();
  sortedDesc: boolean = false;
  form!: FormGroup;
  arrayExpanded: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: MovimientosService
  ) {
    this.form = this.formBuilder.group({
      type: ['', []],
      since: ['', []],
      till: ['', []],
      amount: ['', []],
    });
  }

  ngOnInit(): void {
    this.service.obtenerMovimientos().subscribe((data) => {
      this.movimientos = data;
      this.reset = data;
      this.arrayExpanded = this.reset.map((_: any) => false);
      console.log(this.movimientos);
    });

    /*
    this.reset = this.movimientos;
    this.arrayExpanded = this.reset.map((_: any) => false);
*/
  }

  sortList(): void {
    let filterByType: string = this.form.get('type')?.value;
    let filterByAmount: string = this.form.get('amount')?.value;
    let newFilteredList = this.reset;

    if (filterByType != '') {
      console.log('this is the filtered type: ' + filterByType);
      newFilteredList = newFilteredList.filter((item: any) => {
        //return item.type == filterByType;
        return item.description.split(' ')[0] == filterByType;
      });
    }
    if (filterByAmount != '') {
      console.log('this is the filtered amount: ' + filterByAmount);
      let amountNumber: Number = parseInt(filterByAmount);
      if (amountNumber > 0) {
        newFilteredList = newFilteredList.slice(0, amountNumber);
      }
    }
    this.movimientos = newFilteredList;
  }

  sortListByDate(): void {
    if (this.sortedDesc) {
      this.movimientos.sort((a: any, b: any) => {
        return a.date.localeCompare(b.date);
      });
    } else {
      this.movimientos.sort((a: any, b: any) => {
        return b.date.localeCompare(a.date);
      });
    }
    this.sortedDesc = !this.sortedDesc;
  }
}
