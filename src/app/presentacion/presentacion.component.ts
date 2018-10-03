import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-presentacion',
    templateUrl: './presentacion.component.html',
    styleUrls:  ['./presentacion.component.css']
})

export class PresentacionComponent {

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 8000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
}