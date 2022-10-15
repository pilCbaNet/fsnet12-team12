import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { ServiciosOfrecidosComponent } from './components/servicios-ofrecidos/servicios-ofrecidos.component';

const routes: Routes = [
  {path: 'home', component:ServiciosOfrecidosComponent},
  {path:'menu', component:MenuComponent,
children:[
  {path: 'movimientos', component:MovimientosComponent},
  {path: 'operaciones', component:OperacionesComponent},
]},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
