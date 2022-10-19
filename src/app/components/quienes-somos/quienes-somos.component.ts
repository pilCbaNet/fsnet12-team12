import { Component, OnInit } from '@angular/core';
import { QuienesSomosService } from 'app/servicios/quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  members:any;
  constructor(private ntroServicio:QuienesSomosService) { }

  ngOnInit(): void {
   this.ntroServicio.obtenerDatosTeam().subscribe(datos => {
    this.members=datos;
   })
  }

}
