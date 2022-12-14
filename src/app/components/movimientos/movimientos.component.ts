import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovimientosService } from '../../servicios/movimientos/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css'],
})
export class MovimientosComponent implements OnInit {
  movimientos: any = [];
  reset: any;
  now: any = new Date();
  sortedDesc: boolean = false;
  form!: FormGroup;
  arrayExpanded: any;
  cuenta: any;

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
    this.service.obtenerCuenta().subscribe((data) => {
      this.cuenta = data;
      console.log('this is your cuenta: ');
      console.log(data);
    });
  }

  sortList(): void {
    let filterByType: string = this.form.get('type')?.value;
    let filterByAmount: string = this.form.get('amount')?.value;
    let newFilteredList = this.reset;

    if (filterByType != '') {
      console.log('this is the filtered type: ' + filterByType);
      newFilteredList = newFilteredList.filter((item: any) => {
        return (
          item.idTipoOperacionNavigation.descripcion.split(' ')[0] ==
          filterByType
        );
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
