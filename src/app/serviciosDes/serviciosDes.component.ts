import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from './../servicio.service';


@Component({
    selector: 'app-serviciosDes',
    templateUrl: './serviciosDes.component.html',
    styleUrls:  ['./serviciosDes.component.css']

})

export class ServiciosDesComponent {

    serviciosDes:any[] = [];

    constructor(private ActivatedRoute: ActivatedRoute, private ServicioService: ServicioService){
        // this.serviciosDes = todosServicios.obtenerServicios();

        this.ActivatedRoute.params.subscribe(params => {
            console.log(params['id']);
             this.serviciosDes = this.ServicioService.obtenerUnServicio(params['id']);
        })
    }
    
}