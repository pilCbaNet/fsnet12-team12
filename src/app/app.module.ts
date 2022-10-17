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
  ],

  imports: [BrowserModule, AppRoutingModule, /* FontAwesomeModule */],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
