import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';


//Componentes Creados
import { PresentacionComponent } from "./presentacion/presentacion.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { TecnologiasComponent } from "./tecnologias/tecnologias.component";


//Componentes con rutas
import { NosotrosDesComponent } from "./nosotrosDes/nosotrosDes.component";
import { ServiciosDesComponent } from "./serviciosDes/serviciosDes.component";
import { InicioComponent } from "./inicio/inicio.component";


// Servicios
import { ServicioService } from './servicio.service';


//ngbootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// rutas
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotrosDes', component: NosotrosDesComponent },
  { path: 'serviciosDes', component: ServiciosDesComponent },
  // { path: 'serviciosDes', component: ServiciosDesComponent }
  { path: 'serviciosDes/:id', component: ServiciosDesComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,
    NosotrosDesComponent,
    ServiciosDesComponent,
    InicioComponent,
    TecnologiasComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

