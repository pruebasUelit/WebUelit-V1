(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n#formulario a:hover {\n    background: #ddd;\n    color: black;\n}\n\nnav img {\n    width: 20vh; \n    margin-left: 1em;\n}\n\n@media only screen and (max-width: 600px) {\n    nav img {\n        margin: 0%; \n    }\n}\n\nsection {\n    /* border: solid; */\n    /* height: 25vh; */\n}\n\n.col-md-12 {\n    padding: 1em;\n    background-color: #043469;\n    text-align: center;\n    /* height: 25vh; */\n}\n\nh3 {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    color: white;\n}\n\nfooter {\n    background-color: #2b2b2b;\n    /* margin-top: 2em; */\n}\n\n.container {\n    padding-top: .1em;\n}\n\n#renglonInfo {\n    color:seashell; \n    margin-top: 2em;\n    padding-bottom: 2em;\n    justify-content: center;\n}\n\n.col-md-4 {\n    margin-top: 1em;\n    padding: 1em;\n    width: 80%;\n}\n\nh6 {\n    text-align: center;\n}\n\np {\n    text-align: justify;\n}\n\nfooter a:link {\n    color: white;\n}\n\nfooter a:visited {\n    color: white;\n} \n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++ nav ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"menu\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"../assets/img/logo.png\" alt=\"LogoUelit\" class=\"rounded\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"> </span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show': navbarOpen}\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <form class=\"navbar-nav mr-right\" id=\"formulario\">\n      <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/']\">Inicio</a>\n      <!-- <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['./servicios']\">Servicios</a> -->\n      <!-- <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">ServiciosDes</a> -->\n      <a class=\"nav-link nav-link\" routerLinkActive='active' href=\"/#servicios\">Servicios</a>\n      <!-- <a class=\"nav-link nav-link\" routerLinkActive='active' href=\"/#nosotrosDes\">Nosotros</a> -->\n      <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/nosotrosDes']\">Nosotros</a>\n      <a class=\"nav-link nav-link\" routerLinkActive='active' href=\"/#contacto\">Contacto</a>\n    </form>\n  </div>\n</nav>\n\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++ FinNav +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n<router-outlet></router-outlet>\n\n\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++ Contacto ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n<section>\n  <div class=\"col-md-12\">\n    <h3>\n      Hagamos juntos cosas increíbles\n      <a href=\"mailto:info@uelit.com.mx?subject=Solicitud%20Uelit\" data-ix=\"fadeinbtn\" style=\"margin-left: 3em;\" class=\"btn btn-outline-info\">Contáctanos</a>\n    </h3>\n  </div>\n</section>\n\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++ End Contacto ++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n\n\n\n\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++ Footer ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<footer>\n  <div class=\"container\">\n    <!-- <a class=\"nav-link nav-link\" routerLinkActive='active' href=\"/#menu\" title=\"To Top\">\n      <span>\n        <i class=\"far fa-arrow-alt-to-top\"></i>\n      </span>\n    </a> -->\n\n    <div class=\"row\" id=\"renglonInfo\">\n\n      <div class=\"col-md-4\">\n        <h6>Oficina Querétaro, Matriz</h6>\n        <p>\n          Av. Zaragoza No. 279 Despacho 207\n          <br> Col. Centro, Santiago de Querétaro, Qro.\n          <br> Teléfono (+52) (01 442) 193 5289, 375 8956\n          <br> Correo electrónico: info@uelit.com.mx\n        </p>\n      </div>\n\n      <div class=\"col-md-4\">\n        <h6>Oficina Operativa Querétaro</h6>\n        <p>\n          Av. Pie de la Cuesta No. 104 Despacho 237\n          <br> Col. Desarrollo San Pablo, Santiago de Querétaro, Qro.\n          <br> Teléfono (+52) (01 442) 538 9664\n          <br> Correo electrónico: info@uelit.com.mx\n        </p>\n      </div>\n\n      <div class=\"col-md-4\">\n        <h6>Oficina CDMX</h6>\n        <p>\n          Miguel Laurent No. 15 Bis, Despacho 404\n          <br> Col. Del Valle, Del. Benito Juárez DF. C.P. 03104\n          <br> Correo electrónico: info@uelit.com.mx\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\" id=\"renglonInfo\" style=\"justify-content: center;\">\n      © 2018 Copyright: <a>UELiT IT </a>\n    </div>\n\n  </div>\n</footer>\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++++ Footer ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PaginaUelit';
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentacion/presentacion.component */ "./src/app/presentacion/presentacion.component.ts");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/servicios.component */ "./src/app/servicios/servicios.component.ts");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nosotros/nosotros.component */ "./src/app/nosotros/nosotros.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _tecnologias_tecnologias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tecnologias/tecnologias.component */ "./src/app/tecnologias/tecnologias.component.ts");
/* harmony import */ var _nosotrosDes_nosotrosDes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nosotrosDes/nosotrosDes.component */ "./src/app/nosotrosDes/nosotrosDes.component.ts");
/* harmony import */ var _serviciosDes_serviciosDes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serviciosDes/serviciosDes.component */ "./src/app/serviciosDes/serviciosDes.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicio.service */ "./src/app/servicio.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Componentes Creados





//Componentes con rutas



// Servicios

//ngbootstrap

// rutas

var appRoutes = [
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"] },
    { path: 'nosotrosDes', component: _nosotrosDes_nosotrosDes_component__WEBPACK_IMPORTED_MODULE_8__["NosotrosDesComponent"] },
    { path: 'serviciosDes', component: _serviciosDes_serviciosDes_component__WEBPACK_IMPORTED_MODULE_9__["ServiciosDesComponent"] },
    // { path: 'serviciosDes', component: ServiciosDesComponent }
    { path: 'serviciosDes/:id', component: _serviciosDes_serviciosDes_component__WEBPACK_IMPORTED_MODULE_9__["ServiciosDesComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_3__["PresentacionComponent"],
                _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_4__["ServiciosComponent"],
                _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__["NosotrosComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_6__["ContactoComponent"],
                _nosotrosDes_nosotrosDes_component__WEBPACK_IMPORTED_MODULE_8__["NosotrosDesComponent"],
                _serviciosDes_serviciosDes_component__WEBPACK_IMPORTED_MODULE_9__["ServiciosDesComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"],
                _tecnologias_tecnologias_component__WEBPACK_IMPORTED_MODULE_7__["TecnologiasComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [_servicio_service__WEBPACK_IMPORTED_MODULE_11__["ServicioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacto {\n    margin-top: 3em;\n}\n\n#centarTexto {\n    text-align: center;\n    margin-top: 2em;\n}\n\ntextarea {\n    height: 8em;\n}\n\n#botones {\n    margin-top: 2em;\n}\n\nbutton {\n    position: relative;\n    float: right;\n    width: 30%;\n}\n\n.g-recaptcha {\n    position: relative;\n    float: right;\n}"

/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacto\">\n    <div class=\"container\">\n        <div class=\"col-md-12\">\n            <h1 id=\"centarTexto\">\n                <strong> Contáctanos </strong>\n            </h1>\n            <h5 id=\"centarTexto\">\n                Hablemos sobre tu Proyecto\n            </h5>\n        </div>\n        <div class=\"row\" style=\"margin-top: 4em;\">\n            <div class=\"col-md-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"nombre\">\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"teléfono\">\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\">\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-comment\"></i></span>\n                    </div>\n                    <textarea class=\"form-control\" placeholder=\"mensaje\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <!-- recaptcha -->\n        <div class=\"row\" id=\"botones\">\n            <div class=\"col-md-12\">\n                <div class=\"g-recaptcha\" data-sitekey=\"6LcJFHAUAAAAAAwrcLFyQKknBeaRK-6nOIEZ_zFN\"></div>\n            </div>\n        </div>\n\n        <!-- Button -->\n        <div class=\"row\" id=\"botones\">\n            <div class=\"col-md-12\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" id=\"enviar\">Enviar</button>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/contacto/contacto.component.css")]
        })
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inicio\">\n\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++ Presentacion ++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<app-presentacion id=\"presentacion\"> </app-presentacion>\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++ FinPresentacion ++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++ Servicios +++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<app-servicios id=\"servicios\"></app-servicios>\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++ FinServicios +++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++ Nosotros +++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<app-nosotros id=\"nosotros\"></app-nosotros>\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++ FinNosotros +++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++ Nosotros +++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<app-tecnologias id=\"contacto\"></app-tecnologias>\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++ FinNosotros +++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n\n<!--+++++++++++++++++++++++++++++++++++++++++++++++++++++ Contacto +++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n<!-- <app-contacto id=\"contacto\"></app-contacto> -->\n<!--++++++++++++++++++++++++++++++++++++++++++++++++++++ FinContacto +++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\n\n</div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html")
        })
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/nosotros/nosotros.component.css":
/*!*************************************************!*\
  !*** ./src/app/nosotros/nosotros.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nosotros {\n   background-color: white;\n   margin-top: 4em;\n}\n\n.container {\n    padding: 2em;\n}\n\n.row {\n    justify-content: center;\n}\n\n.row .col-md-10 {\n    margin-top: 2em;\n    text-align: justify;\n    font-size: 1.2em;\n    margin-bottom: 3em;\n}\n\nh1 {\n    margin-top: 4em;\n    text-align: center;\n}\n\n.parallax {\n    /* The image used */\n    background-image: linear-gradient(rgba(247, 250, 252, 0.45),\n    rgba(247, 250, 252, 0.45)) ,url(\"/assets/slider/hojas.jpg\"); \n    /* Set a specific height */\n    /* height: 100vh;  */\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/nosotros/nosotros.component.html":
/*!**************************************************!*\
  !*** ./src/app/nosotros/nosotros.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nosotros\">\n    <div class=\"parallax\">\n        <div class=\"container\">\n            <h1><strong>Integración de Servicios de IT</strong></h1>\n\n            <div class=\"row\">\n                <div class=\"col-md-10\">\n                    <p>\n                        En UELiT hemos basado el crecimiento en el servicio y la calidad, mediante la competitividad que genera mayor productividad\n                        a menor costo, creando una sinergia con servicios de valor agregado que contribuye al éxito de los\n                        proyectos de los clientes. Haciendo parte de nosotros sus objetivos y buscando opciones a través\n                        de nuestras capacidades para desarrollar soluciones reales que portan confiabilidad y resultados.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nosotros/nosotros.component.ts":
/*!************************************************!*\
  !*** ./src/app/nosotros/nosotros.component.ts ***!
  \************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NosotrosComponent = /** @class */ (function () {
    function NosotrosComponent() {
    }
    NosotrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nosotros',
            template: __webpack_require__(/*! ./nosotros.component.html */ "./src/app/nosotros/nosotros.component.html"),
            styles: [__webpack_require__(/*! ./nosotros.component.css */ "./src/app/nosotros/nosotros.component.css")]
        })
    ], NosotrosComponent);
    return NosotrosComponent;
}());



/***/ }),

/***/ "./src/app/nosotrosDes/nosotrosDes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/nosotrosDes/nosotrosDes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nosotrosDes{\n    padding-bottom: 2em;\n}\n\n.container{\n    padding-top: 2em;\n}\n\n.container img {\n    max-width: 100%;\n    height: 37vh;\n    display: inline;\n    justify-content: center;\n    padding: 40px;\n    margin-bottom: .5em;\n    margin-left: 3em;\n}\n\n#justificarTexto{\n    text-align: justify;\n}\n\n#centrarTexto {\n    text-align: center;\n}\n\n.row {\n    margin-top: 2em;\n    /* border: 1px solid red; */\n}\n\n.col-md-6 {\n    margin-top: 1em;\n    margin-bottom: 2em;\n}\n\n#rowDes {\n    box-shadow: 6px 6px 6px rgb(47, 48, 47);\n    border: .5px solid;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/nosotrosDes/nosotrosDes.component.html":
/*!********************************************************!*\
  !*** ./src/app/nosotrosDes/nosotrosDes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nosotrosDes\">\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h1 id=\"centrarTexto\"><strong>Quienes Somos</strong></h1>\n                <!-- <img src=\"../assets/img/logo.png\" alt=\"LogoUelit\" class=\"rounded\"> -->\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img src=\"../assets/nosotros/quienesSomos.png\">\n            </div>\n            <div class=\"col-md-8\" id=\"justificarTexto\">\n                <p>\n                    ‘Integración de Servicios en Tecnologías de Información UELiT’ (UELiT) es una empresa Mexicana que ofrece el servicio de\n                    desarrollo de software e integración de soluciones de Tecnologías de Información, está conformada por\n                    profesionales dedicados a proporcionar Servicios de Consultoría.\n                </p>\n                <p>\n                    UELiT fue fundada por el licenciado en informática Miguel Flores Bojorges y un grupo de Consultores, iniciando operaciones\n                    en 2009, quienes con su vasta experiencia comprobada a lo largo de 15 años brindando Servicios en Consultoría\n                    y Desarrollo de Aplicaciones Bancarias, lenguajes de programación de última generación, metodologías\n                    de desarrollo de sistemas y administración de proyectos, ha permitido abordar proyectos de misión crítica.\n                </p>\n                <!-- <p>\n                    UELiT ha basado su crecimiento en el Servicio y la Calidad, mediante la competitividad que genera mayor productividad a menor\n                    costo, creando una sinergia con servicios de valor agregado que contribuye al éxito de los proyectos\n                    de los clientes. Haciendo parte de nosotros sus objetivos y buscando soluciones a través de nuestras\n                    capacidades para desarrollar soluciones reales que portan Confiabilidad y Resultados.\n                </p> -->\n                <p>\n                    En UELiT colaboran profesionales con hasta 15 años de experiencia en el Sector Financiero, Instituciones de Gobierno, así\n                    como en el Sector Empresarial; innovando y desarrollando aplicaciones exitosas para sustentar el crecimiento\n                    de nuestros clientes.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\" id=\"rowDes\">\n                    <h5 class=\"card-header\" id=\"centrarTexto\">Misión</h5>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\" id=\"justificarTexto\">Proveer servicios de Tecnologías de información sustentables\n                            para potenciar las oportunidades y ventajas competitivas de nuestros clientes, a través de soluciones\n                            reales, personalizadas y rentables que aporten valor agregado a sus procesos de negocio; ofreciendo\n                            a nuestro talento humano una mejor calidad de vida en un ambiente propicio para su crecimiento.</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\" id=\"rowDes\">\n                    <h5 class=\"card-header\" id=\"centrarTexto\">Visión</h5>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\" id=\"justificarTexto\">Líderes en el mercado de Servicios de Tecnologías de Información\n                            a nivel global, sustentados en la competencia de nuestro capital humano, a través de metodologías\n                            certificadas, sistemas de gestión automatizados y alianzas estratégicas.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img src=\"../assets/nosotros/nosotrosDes.png\">\n            </div>\n\n            <div class=\"col-md-8\" style=\"margin-top: 2em;\">\n                <h5 id=\"centrarTexto\"> Valores y Aptitudes</h5>\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <ul>\n                            <li>Compromiso</li>\n                            <li>Honestidad</li>\n                            <li>Actitud de servicio</li>\n                            <li>Tenacidad</li>\n                            <li>Respeto</li>\n                            <li>Ética profesional</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-md-8\">\n                        <ul>\n                            <li>Espíritu de Trabajo en equipo</li>\n                            <li>Espíritu de Servicio</li>\n                            <li>Lealtad y Confidencialidad</li>\n                            <li>Fomento de la Innovación y Creatividad</li>\n                            <li>Capacitación Continua</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nosotrosDes/nosotrosDes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nosotrosDes/nosotrosDes.component.ts ***!
  \******************************************************/
/*! exports provided: NosotrosDesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosDesComponent", function() { return NosotrosDesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NosotrosDesComponent = /** @class */ (function () {
    function NosotrosDesComponent() {
    }
    NosotrosDesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nosotrosDes',
            template: __webpack_require__(/*! ./nosotrosDes.component.html */ "./src/app/nosotrosDes/nosotrosDes.component.html"),
            styles: [__webpack_require__(/*! ./nosotrosDes.component.css */ "./src/app/nosotrosDes/nosotrosDes.component.css")]
        })
    ], NosotrosDesComponent);
    return NosotrosDesComponent;
}());



/***/ }),

/***/ "./src/app/presentacion/presentacion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#presentacion {\n    width: 100%;\n    height: 70vh;\n}\n\n.imgFondo {\n    width: 100%;\n    height: 70vh;\n    opacity: .65;\n\n}\n\n.carousel-caption {\n    /* color: rgb(4, 4, 105); */\n    color: #043469;\n    margin-bottom: 6em;\n}\n\nh1 {\n    margin-bottom: 1em;\n}\n\n@media only screen and (max-width: 600px) {\n    h1 {\n        font-size: 30px;\n        margin-bottom: 1em;  \n    }\n\n    h4 {\n        font-size: 20px;\n        text-align: center;\n    }\n}"

/***/ }),

/***/ "./src/app/presentacion/presentacion.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"presentacion\">\n    <ngb-carousel>\n        <ng-template ngbSlide>\n            <img src=\"../assets/slider/grupo.jpeg\" class=\"imgFondo\">\n            <div class=\"carousel-caption\">\n                <h1><strong>Desarrollo de Software</strong></h1>\n                <h5>\n                    <strong>\n                        Empleamos tecnologias open source con soluciones innovadoras a costos asequibles\n                    </strong>\n                </h5>\n            </div>\n        </ng-template>\n        <ng-template ngbSlide>\n            <img src=\"../assets/slider/compu.jpg\" class=\"imgFondo\">\n            <div class=\"carousel-caption\">\n                <h1><strong>Desarrollos ágiles bajo SCRUM</strong></h1>\n                <h5>\n                    <strong>\n                        Aplicamos metodologías de punta para desarrollar en menor tiempo el software que su empresa\n                        necesita\n                    </strong>\n                </h5>\n            </div>\n        </ng-template>\n\n        <ng-template ngbSlide>\n            <img src=\"../assets/slider/hojas.jpg\" class=\"imgFondo\">\n            <div class=\"carousel-caption\">\n                <h1><strong>Fábrica de Software y Outsourcing de talento en TI</strong></h1>\n                <h5>\n                    <strong>\n                        Sumamos capacidad a su operación acelerando el proceso de desarrollo de software. Los costos\n                        pueden alcanzar una disminución significativa comparada con el desarrollo interno en su\n                        organización.\n                    </strong>\n                </h5>\n            </div>\n        </ng-template>\n\n        <ng-template ngbSlide>\n            <img src=\"../assets/slider/manos.jpg\" class=\"imgFondo\">\n            <div class=\"carousel-caption\">\n                <h1><strong>Contáctanos</strong></h1>\n                <h5>\n                    <strong>\n                        Calidad y experiencia son la base de nuestro éxito. Contáctenos para que podamos asesorarle en\n                        su proyecto\n                    </strong>\n                </h5>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n</div>"

/***/ }),

/***/ "./src/app/presentacion/presentacion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.ts ***!
  \********************************************************/
/*! exports provided: PresentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function() { return PresentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PresentacionComponent = /** @class */ (function () {
    function PresentacionComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 8000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    PresentacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentacion',
            template: __webpack_require__(/*! ./presentacion.component.html */ "./src/app/presentacion/presentacion.component.html"),
            styles: [__webpack_require__(/*! ./presentacion.component.css */ "./src/app/presentacion/presentacion.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], PresentacionComponent);
    return PresentacionComponent;
}());



/***/ }),

/***/ "./src/app/servicio.service.ts":
/*!*************************************!*\
  !*** ./src/app/servicio.service.ts ***!
  \*************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicioService = /** @class */ (function () {
    function ServicioService() {
        this.servicios = [
            {
                titulo: 'Fabrica de Software (Desarrollo y Testing)',
                resumen: 'Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación. ',
                descripcion: 'Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación. El objetivo de nuestro Servicio de “Fábrica de Software Extendido” (FASE) es el de proporcionarle los servicios de Análisis, Diseño, Construcción y Pruebas Unitarias en plataformas Mainframe y/o Distribuido; a la medida de su Cliente final. Los costos pueden alcanzar una disminución significativa comparada con el desarrollo interno en su organización, al reducir los costos de reclutamiento y entrenamiento.',
                image: '../assets/servicios/Fabricadesoftware.png'
            },
            {
                titulo: 'Outsourcing de Personal (Staffing)',
                resumen: ' Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto.',
                descripcion: 'Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto. Contamos con amplio conocimiento de las tendencias y retos que enfrentan las empresas y ofrecemos servicios de asignación de Personal altamente calificado en IT por ‘Time and Material’. Mediante procedimientos de control y seguimiento de nuestros servicios, le garantizamos los resultados esperados, generando ahorros considerables para su empresa.',
                image: '../assets/servicios/outsoursing.png'
            },
            {
                titulo: 'Desarrollo de Software a Medida',
                resumen: 'Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks.',
                descripcion: 'Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks. Aplicamos metodología ágil SCRUM en nuestros desarrollos, involucrando directamente anuestros clientes. Empleamos tecnologías Open Source con soluciones innovadoras a costos asequibles.',
                image: '../assets/servicios/softwareamedida.png'
            },
            {
                titulo: 'Desarrollo de Software por Proyectos a Precio Cerrado',
                resumen: ' Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad.',
                descripcion: 'Administramos Proyectos de Punta a Punta con herramientas, metodologías y procedimientos de vanguardia para la implementación de nuevas tecnologías. Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad. Generamos confianza en nuestros clientes mediante informe de avance, identificación de riesgos y mitigación de los mismos.',
                image: '../assets/servicios/porproyecto.png'
            },
            {
                titulo: 'Consultoria',
                resumen: ' Servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa mediante un diagnóstico inicial.',
                descripcion: 'Le ofrecemos servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa mediante un diagnóstico inicial. Detección de malas prácticas, pliego de Recomendaciones, Planes de mejora. Le brindamos Estrategias IT, Análisis de requerimientos, Especificaciones funcionales y técnicas, auditoria de infraestructura IT, análisis para que logre una reducción de costos en su área IT.',
                image: '../assets/servicios/consultoria.png'
            }
            // {
            //   titulo: 'ERP (Odoo)',
            //   resumen: ' Socio de negocios de ODOO. Una Propuesta de Valor Exclusivo. Todo lo que necesita en una experiencia de usuario de primera categoría.',
            //   descripcion:'Socio de negocios de ODOO. UNA PROPUESTA DE VALOR EXCLUSIVO. Todo lo que necesita en una experiencia de usuario de primera categoría. El modelo de código abierto de Odoo nos ha permitido aprovechar los conocimientos de miles de desarrolladores y expertos en el mundo empresarial para construir cientos de aplicaciones en solo unos años. Con bases tecnológicas potentes, la estructura de Odoo es única. Ofrece usabilidad de la más alta calidad en todas las aplicaciones. Las mejoras en usabilidad realizadas en Odoo se implementarán directamente en todas nuestras aplicaciones totalmente integradas. De esa manera, Odoo evoluciona mucho más rápido que cualquier otra solución.',
            //   image: '../assets/servicios/odoo.png'
            // }
        ];
        // console.log('Funcionando servicio');
    }
    ServicioService.prototype.obtenerServicios = function () {
        return this.servicios;
    };
    ServicioService.prototype.obtenerUnServicio = function (id) {
        return this.servicios[id];
    };
    ServicioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServicioService);
    return ServicioService;
}());



/***/ }),

/***/ "./src/app/servicios/servicios.component.css":
/*!***************************************************!*\
  !*** ./src/app/servicios/servicios.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    /* border: 1px solid red; */\n}\n\n.clsServicios {\n    margin-top: 2em;\n    text-align: center;\n}\n\n.justificar {\n    text-align: justify;\n    font-family: 'Roboto', sans-serif;\n}\n\n.row {\n    width: 98%;\n    margin-left: 1em;\n    /* border: 1px solid green; */\n}\n\n.nameServicio {\n    margin-top: .5em;\n    text-align: center;\n    font-size: 17px;\n}\n\n.card-img-top {\n    max-width: 100%;\n    height: 35vh;\n    display: inline;\n    justify-content: center;\n    padding: 50px;\n}\n\n.col-md-4 #rowCard{\n    margin-top: 2em; \n    border: none;\n    width: 100%;\n}\n\n.col-md-4{\n    /* border: 1px solid red; */\n    margin-top: 1.5em;\n}\n\nbutton {\n    position: relative;\n    float: right;\n}\n\n.col-md-4 a:link {\n    color: black;\n}\n\n.col-md-4 a:visited {\n    color: black;\n} "

/***/ }),

/***/ "./src/app/servicios/servicios.component.html":
/*!****************************************************!*\
  !*** ./src/app/servicios/servicios.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cacaDeVaca\">\n    <div class=\"container\">\n        <h1 class=\"clsServicios\"><strong>Servicios</strong></h1>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let item of servicios, index as i\">\n                <div class=\"card\" id=\"rowCard\">\n                    <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes',i]\">\n                        <!-- <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\"> -->\n                        <img class=\"card-img-top\" src=\"{{item.image}}\" alt=\"Card image cap\">\n                        <div>\n                            <h5 class=\"nameServicio\"><strong>{{item.titulo}}</strong></h5>\n                            <br>\n                            <p class=\"justificar\">\n                                {{item.resumen}}\n                            </p>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 6 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n            <div class=\"col-md-4\">\n                <a class=\"nav-link nav-link\" href=\"https://www.odoo.com/es_ES/partners/integracion-de-servicios-en-ti-uelit-sa-de-cv-1708530?country_id=150\" target=\"_blank\">\n                    <div class=\"card\" id=\"rowCard\">\n                        <img class=\"card-img-top\" src=\"../assets/servicios/odoo.png\" alt=\"Card image cap\">\n                        <div>\n                            <h5 class=\"nameServicio\"><strong>ERP (Odoo)</strong></h5>\n                            <br>\n                            <p class=\"justificar\">\n                                Socio de negocios de ODOO\n                                <br> <strong>Una Propuesta de Valor Exclusivo</strong>\n                                <br> Todo lo que necesita en una experiencia de usuario de primera categoría.\n                            </p>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n\n\n        <!-- *****************************************Renglon de Servicios 1*********************************************** -->\n        <!-- <div class=\"row\"> -->\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 1 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n            <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes/#fabricaDeSw']\">\n                <div class=\"card\" id=\"rowCard\">\n                    <img class=\"card-img-top\" src=\"../assets/servicios/settings.png\" alt=\"Card image cap\">\n                    <div>\n                        <h5 class=\"nameServicio\"><strong>Fabrica de Software (Desarrollo y Testing)</strong></h5>\n                        <br>\n                        <p class=\"justificar\">\n                            Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div> -->\n\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 2 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n            <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">\n                <div class=\"card\" id=\"rowCard\">\n                    <img class=\"card-img-top\" src=\"../assets/servicios/hiring.png\" alt=\"Card image cap\">\n                    <div>\n                        <h5 class=\"nameServicio\"><strong>Outsourcing de Personal (Staffing)</strong></h5>\n                        <br>\n                        <p class=\"justificar\">\n                            Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div> -->\n\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 3 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n            <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">\n                <div class=\"card\" id=\"rowCard\">\n                    <img class=\"card-img-top\" src=\"../assets/servicios/development.png\" alt=\"Card image cap\">\n                    <div>\n                        <h5 class=\"nameServicio\"><strong>Desarrollo de Software a Medida</strong></h5>\n                        <br>\n                        <p class=\"justificar\">\n                            Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div> -->\n\n        <!--*****************************************Renglon de Servicios 2**********************************************-->\n        <!-- <div class=\"row\"> -->\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 4 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n            <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">\n                <div class=\"card\" id=\"rowCard\">\n                    <img class=\"card-img-top\" src=\"../assets/servicios/software.png\" alt=\"Card image cap\">\n                    <div>\n                        <h5 class=\"nameServicio\"><strong>Desarrollo de Software por Proyectos a Precio Cerrado</strong></h5>\n                        <br>\n                        <p class=\"justificar\">\n                            Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div> -->\n\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 5 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n            <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">\n                <div class=\"card\" id=\"rowCard\">\n                    <img class=\"card-img-top\" src=\"../assets/servicios/consulting.png\" alt=\"Card image cap\">\n                    <div>\n                        <h5 class=\"nameServicio\"><strong>Consultoria</strong></h5>\n                        <br>\n                        <p class=\"justificar\">\n                            Servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa mediante\n                            un diagnóstico inicial.\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div> -->\n\n        <!--++++++++++++++++++++++++++++++++++++++++++ Servicio 6 +++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <!-- <div class=\"col-md-4\">\n                <a class=\"nav-link nav-link\" routerLinkActive='active' [routerLink]=\"['/serviciosDes']\">\n                    <div class=\"card\" id=\"rowCard\">\n                        <img class=\"card-img-top\" src=\"../assets/servicios/odoo.png\" alt=\"Card image cap\">\n                        <div>\n                            <h5 class=\"nameServicio\"><strong>ERP (Odoo)</strong></h5>\n                            <br>\n                            <p class=\"justificar\">\n                                Socio de negocios de ODOO\n                                <br> <strong>Una Propuesta de Valor Exclusivo</strong>\n                                <br> Todo lo que necesita en una experiencia de usuario de primera categoría.\n                            </p>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div> -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/servicios/servicios.component.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/servicios.component.ts ***!
  \**************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../servicio.service */ "./src/app/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent(ServicioService) {
        this.servicios = [];
        this.servicios = ServicioService.obtenerServicios();
    }
    ServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/servicios/servicios.component.css")]
        }),
        __metadata("design:paramtypes", [_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"]])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/serviciosDes/serviciosDes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/serviciosDes/serviciosDes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#serviciosDes {\n    /* background-color: rgb(248, 233, 233); */\n}\n\n.container {\n    padding: 1em;\n    padding-bottom: 2em;\n}\n\n.clsServicios {\n    margin-top: 1em;\n    margin-bottom: 1em;\n    text-align: center;\n}\n\np {\n    text-align: justify;\n    font-size: 18px;\n}\n\n.row {\n    margin-top: 2em; \n    padding: 2em;\n}\n\n.card-img-top {\n    max-width: 100%;\n    height: 50vh;\n    display: inline;\n    justify-content: center;\n    padding: 50px;\n}\n\n.card-img {\n    max-width: 100%;\n    height: 50vh;\n    display: inline;\n    justify-content: center;\n}\n\n.nameServicio {\n    margin-top: 2em;\n    text-align: center;\n    font-size: 22px;\n}\n\n#rowDes {\n    box-shadow: 6px 6px 6px rgba(47, 48, 47, .5);\n    border: .5px solid;\n    border-radius: 1em;\n}\n\n.col-md-8 {\n}\n\n.col-md-4 {\n    /* align-items: center; */\n    /* justify-items: center; */\n    /* justify-content: center; */\n    align-content: center; \n}"

/***/ }),

/***/ "./src/app/serviciosDes/serviciosDes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/serviciosDes/serviciosDes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"serviciosDes\">\n    <div class=\"container\">\n        <h1 class=\"clsServicios\"><strong> Descripcion Detallada de Servicios </strong></h1>\n\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <p>\n                    Le invito a conocer a un equipo de profesionales comprometidos con la calidad, y una oferta de servicios para sus necesidades\n                    de desarrollo y pruebas de calidad del software implementado con las nuevas tecnologías.\n                </p>\n\n                <p>\n                    En UELiT contamos con vasta experiencia en el medio informático, creemos que nuestros conocimientos son parte fundamental\n                    para poder ofrecer un servicio de calidad y profesionalismo, evaluando la necesidad con la que cuenta\n                    cada uno de nuestros clientes, para poder ofrecer así la mejor opción en relación costo beneficio de\n                    los proyectos que son asignados a nuestra empresa.\n                </p>\n\n                <p>\n                    Nuestro objetivo es dotar de soluciones tecnológicas que les permitan mejorar su forma de hacer negocios y de competir en\n                    sus mercados.\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <img class=\"card-img\" src=\"../assets/servicios/serviciosDes.jpg\" alt=\"Card image cap\">\n            </div>\n        </div>\n        <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->\n        <div class=\"row\" id=\"rowDes\">\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"{{serviciosDes.image}}\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>{{serviciosDes.titulo}}</strong></h5>\n                <br>\n                <p>\n                    {{serviciosDes.descripcion}}\n                </p>\n            </div>\n\n        </div>\n\n        <!--************************************************Servicio N°1*******************************************************-->\n        <!-- <div class=\"row\" id=\"fabricaDeSw\">\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/settings.png\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>Fabrica de Software (Desarrollo y Testing)</strong></h5>\n                <br>\n                <p>\n                    Basada en la continua actualización y especialización Metodológica, Tecnológica y Humana, sumamos capacidad de operación.\n                    El objetivo de nuestro Servicio de “Fábrica de Software Extendido” (FASE) es el de proporcionarle los\n                    servicios de Análisis, Diseño, Construcción y Pruebas Unitarias en plataformas Mainframe y/o Distribuido;\n                    a la medida de su Cliente final.\n                </p>\n                <p>\n                    Los costos pueden alcanzar una disminución significativa comparada con el desarrollo interno en su organización, al reducir\n                    los costos de reclutamiento y entrenamiento.\n                </p>\n            </div>\n        </div> -->\n\n        <!--************************************************Servicio N°2*******************************************************-->\n\n        <!-- <div class=\"row\" id=\"borderP\">\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>{{serviciosDes.titulo}}</strong></h5>\n                <br>\n                <p>\n                    Encontrar el personal adecuado no siempre es tarea fácil, seleccionar las personas idóneas significa el éxito del proyecto.\n\n                </p>\n                <p>\n                    Contamos con amplio conocimiento de las tendencias y retos que enfrentan las empresas y ofrecemos servicios de asignación\n                    de Personal altamente calificado en IT por ‘Time and Material’. Mediante procedimientos de control y\n                    seguimiento de nuestros servicios, le garantizamos los resultados esperados, generando ahorros considerables\n                    para su empresa. </p>\n            </div>\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/hiring.png\" alt=\"Card image cap\">\n            </div>\n        </div> -->\n\n        <!--**************************************************Servicio N°3****************************************************-->\n        <!-- <div class=\"row\" id=\"borderP\">\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/development.png\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>{{serviciosDes.titulo}}</strong></h5>\n                <br>\n                <p>\n                    Desarrollamos software a medida en ambientes Web, escritorio, móvil. Servicios bajo variadas tecnologías y frameworks. Aplicamos\n                    metodología ágil SCRUM en nuestros desarrollos, involucrando directamente a nuestros clientes.\n                </p>\n                <p>\n                    Empleamos tecnologías Open Source con soluciones innovadoras a costos asequibles.\n                </p>\n            </div>\n        </div> -->\n\n        <!--****************************************************Servicio N°4**************************************************-->\n\n        <!-- <div class=\"row\" id=\"borderP\">\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>Desarrollo de Software por Proyectos a Precio Cerrado</strong></h5>\n                <br>\n                <p>\n                    Administramos Proyectos de Punta a Punta con herramientas, metodologías y procedimientos de vanguardia para la implementación\n                    de nuevas tecnologías.\n                </p>\n                <p>\n                    Desarrollo de aplicaciones con un estricto control en el seguimiento de las actividades para cumplir con oportunidad y Calidad.\n                </p>\n                <p>\n                    Generamos confianza en nuestros clientes mediante informe de avance, identificación de riesgos y mitigación de los mismos.\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/software.png\" alt=\"Card image cap\">\n            </div>\n        </div> -->\n\n\n        <!--***************************************************Servicio N°5****************************************************-->\n        <!-- <div class=\"row\" id=\"borderP\">\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/consulting.png\" alt=\"Card image cap\">\n            </div>\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>Consultoria</strong></h5>\n                <br>\n                <p>\n                    Le ofrecemos servicios de Consultoría integral en tecnologías y análisis de negocios. Evaluación de la situación de su Empresa\n                    mediante un diagnóstico inicial. Detección de malas prácticas, pliego de Recomendaciones, Planes de mejora.\n                </p>\n                <p>\n                    Le brindamos Estrategias IT, Análisis de requerimientos, Especificaciones funcionales y técnicas, auditoria de infraestructura\n                    IT, análisis para que logre una reducción de costos en su área IT.\n                </p>\n            </div>\n        </div> -->\n\n        <!--***************************************************Servicio N°6****************************************************-->\n\n        <!-- <div class=\"row\" id=\"borderP\">\n            <div class=\"col-md-8\">\n                <h5 class=\"nameServicio\"><strong>ERP (Odoo)</strong></h5>\n                <br>\n                <p>\n                    Socio de negocios de ODOO\n                </p>\n                <p>\n                    UNA PROPUESTA DE VALOR EXCLUSIVO\n                </p>\n                <p>\n                    Todo lo que necesita en una experiencia de usuario de primera categoría.\n                </p>\n                <p>\n                    El modelo de código abierto de Odoo nos ha permitido aprovechar los conocimientos de miles de desarrolladores y expertos\n                    en el mundo empresarial para construir cientos de aplicaciones en solo unos años.\n                </p>\n                <p>\n                    Con bases tecnológicas potentes, la estructura de Odoo es única. Ofrece usabilidad de la más alta calidad en todas las aplicaciones.\n                </p>\n                <p>\n                    Las mejoras en usabilidad realizadas en Odoo se implementarán directamente en todas nuestras aplicaciones totalmente integradas.De\n                    esa manera, Odoo evoluciona mucho más rápido que cualquier otra solución.\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"../assets/servicios/odoo.png\" alt=\"Card image cap\">\n            </div>\n        </div> -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/serviciosDes/serviciosDes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/serviciosDes/serviciosDes.component.ts ***!
  \********************************************************/
/*! exports provided: ServiciosDesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosDesComponent", function() { return ServiciosDesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../servicio.service */ "./src/app/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiciosDesComponent = /** @class */ (function () {
    function ServiciosDesComponent(ActivatedRoute, ServicioService) {
        // this.serviciosDes = todosServicios.obtenerServicios();
        var _this = this;
        this.ActivatedRoute = ActivatedRoute;
        this.ServicioService = ServicioService;
        this.serviciosDes = [];
        this.ActivatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
            _this.serviciosDes = _this.ServicioService.obtenerUnServicio(params['id']);
        });
    }
    ServiciosDesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serviciosDes',
            template: __webpack_require__(/*! ./serviciosDes.component.html */ "./src/app/serviciosDes/serviciosDes.component.html"),
            styles: [__webpack_require__(/*! ./serviciosDes.component.css */ "./src/app/serviciosDes/serviciosDes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"]])
    ], ServiciosDesComponent);
    return ServiciosDesComponent;
}());



/***/ }),

/***/ "./src/app/tecnologias/tecnologias.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tecnologias/tecnologias.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    margin-top: 2em;\n    margin-bottom: 1em;\n    text-align: center;\n}\n\n.col-md-2 #rowCard{\n    border: none;\n    width: 100%;\n}\n\n.col-md-2 {\n    /* border: solid red; */\n}\n\n.container {\n    /* border: solid; */\n    margin-bottom: 4em;\n}\n\n.row {\n    /* border: solid; */\n}\n\nimg {\n    max-width: 100%;\n    height: 27vh;\n    display: inline;\n    justify-content: center;\n    padding: 30px;\n}\n\n@media only screen and (max-width: 600px) {\n    h1 {\n        margin-top: 2em;\n        text-align: center;\n    }\n\n    img {\n        max-width: 100%;\n        height: 35vh;\n        display: inline;\n        justify-content: center;\n        padding: 50px;\n    }\n}"

/***/ }),

/***/ "./src/app/tecnologias/tecnologias.component.html":
/*!********************************************************!*\
  !*** ./src/app/tecnologias/tecnologias.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1> Nuestras Tecnologías </h1>\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/angular\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <!-- <i class=\"devicon-mongodb-plain-wordmark colored\"></i> -->\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/mongodb\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <!-- <i class=\"devicon-javascript-plain colored\"></i> -->\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/js\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <!-- <i class=\"devicon-nodejs-plain colored\"></i> -->\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/node\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/firebase\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <!-- <i class=\"devicon-github-plain-wordmark colored\"></i> -->\n            <div class=\"card\" id=\"rowCard\">\n                <img class=\"card-img-top\" src=\"../assets/img/github\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tecnologias/tecnologias.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tecnologias/tecnologias.component.ts ***!
  \******************************************************/
/*! exports provided: TecnologiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiasComponent", function() { return TecnologiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TecnologiasComponent = /** @class */ (function () {
    function TecnologiasComponent() {
    }
    TecnologiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tecnologias',
            template: __webpack_require__(/*! ./tecnologias.component.html */ "./src/app/tecnologias/tecnologias.component.html"),
            styles: [__webpack_require__(/*! ./tecnologias.component.css */ "./src/app/tecnologias/tecnologias.component.css")]
        })
    ], TecnologiasComponent);
    return TecnologiasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/uelit-l019/Escritorio/UELIT/Sep-25ResCorreo/PaginaUelit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map