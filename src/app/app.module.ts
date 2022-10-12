import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServiciosOfrecidosComponent } from './components/servicios-ofrecidos/servicios-ofrecidos.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BannerComponent, ServiciosOfrecidosComponent, ModalComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
