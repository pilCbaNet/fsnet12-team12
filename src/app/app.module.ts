import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'; */

//Componentes
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServiciosOfrecidosComponent } from './components/servicios-ofrecidos/servicios-ofrecidos.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UltimosRetirosComponent } from './components/ultimos-retiros/ultimos-retiros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RetiroComponent } from './components/retiro/retiro.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ServiciosOfrecidosComponent,
    FormComponent,
    FooterComponent,
    OperacionesComponent,
    MenuComponent,
    MovimientosComponent,
    QuienesSomosComponent,
    DashboardComponent,
    UltimosRetirosComponent,
    RetiroComponent,
    DepositoComponent,
    NosotrosComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
