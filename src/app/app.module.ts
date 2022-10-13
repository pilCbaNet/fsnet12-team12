import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServiciosOfrecidosComponent } from './components/servicios-ofrecidos/servicios-ofrecidos.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BannerComponent, ServiciosOfrecidosComponent, FormComponent],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
