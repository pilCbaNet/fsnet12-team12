import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { ServiciosOfrecidosComponent } from './components/servicios-ofrecidos/servicios-ofrecidos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { DepositoComponent } from './components/deposito/deposito.component';

const routes: Routes = [
  { path: 'home', component: ServiciosOfrecidosComponent },
  { path: 'form', component: FormComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'operaciones',
    component: OperacionesComponent,
  },
  { path: 'retiros', component: RetiroComponent },
  { path: 'depositos', component: DepositoComponent },
  {
    path: 'menu',
    component: MenuComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesSomosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
