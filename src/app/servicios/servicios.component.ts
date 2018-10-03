import { Component } from '@angular/core';
import { ServicioService } from './../servicio.service';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls:  ['./servicios.component.css']

})

export class ServiciosComponent {
    
    servicios:any[] = [];

    constructor (ServicioService: ServicioService){
        this.servicios = ServicioService.obtenerServicios();

    }
}