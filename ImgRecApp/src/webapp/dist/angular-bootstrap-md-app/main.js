(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n\r\n  <!-- Collapse button -->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\"\r\n    aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Collapsible content -->\r\n  <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\r\n    <div class=\"container\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link waves-light text-light\" routerLink=\"/upload\" mdbWavesEffect>Upload</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light text-light\" routerLink=\"/compare\" mdbWavesEffect>Compare Faces</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light text-light\" routerLink=\"/contact\" mdbWavesEffect>Contact <mdb-icon fas icon=\"envelope\" class=\"white-text\"></mdb-icon></a>\r\n    </li>\r\n    </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Collapsible content -->\r\n\r\n</nav> \r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer font-small\">\r\n \r\n  <!-- Footer Elements -->\r\n  <div class=\"container\">\r\n\r\n    <!-- Grid row-->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-12 py-5\">\r\n        <div class=\"mb-5 flex-center\">\r\n          <!--Linkedin -->\r\n          <a class=\"li-ic\" href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n            <i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n          </a>\r\n          <!--GitHub-->\r\n          <a class=\"ins-ic\" href=\"https://github.com/sfofana/AwsImgRekJava\" target=\"_blank\">\r\n            <i class=\"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\r\n          </a>\r\n          <!--Youtube-->\r\n          <a class=\"pin-ic\" href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n            <i class=\"fab fa-youtube fa-lg white-text fa-2x\"> </i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row-->\r\n\r\n  </div>\r\n  <!-- Footer Elements -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"foot text-center py-3\">\r\n    \r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/compare/compare.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/compare/compare.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 py-5 z-depth-1\">\r\n\r\n\r\n    <!--Section: Content-->\r\n    <section class=\"px-md-5 mx-md-5 text-center dark-grey-text\">\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row d-flex justify-content-center\">\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-6 col-md-8\">\r\n\r\n          <h3 class=\"font-weight-bold\">AWS Rekognition</h3>\r\n\r\n          <p class=\"text-muted\">Compare faces and review the results</p>\r\n          <p>1st Image: <input [(ngModel)]=\"img1\" class=\"btn-md ml-0 mb-5\" (keyup.enter)=\"compareFaces()\" type=\"text\"><br>\r\n            2nd Image: <input [(ngModel)]=\"img2\" class=\"btn-md ml-0 mb-5\" (keyup.enter)=\"compareFaces()\" type=\"text\"><br>\r\n          <a class=\"btn btn-info btn-md ml-0 mb-5\" (click)=\"compareFaces()\" role=\"button\">Compare</a></p>\r\n\r\n          <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n\r\n          <div *ngIf=\"results > 1\">\r\n            <h5 *ngIf=\"results > 70\" class=\"success\">{{results | number:'2.1-2'}}% similarity</h5> \r\n            <h5 *ngIf=\"results < 70\" class=\"invalid\">Less than 70% similarity</h5>\r\n          </div>      \r\n          <h5 *ngIf=\"message\" class=\"success\">{{message}}</h5>\r\n          <table mdbTable class=\"view display overlay z-depth-1-half\">\r\n            <thead>\r\n              <tr>\r\n                <th *ngFor=\"let detail of details\" class=\"success\">{{detail | titlecase}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th *ngFor=\"let image of images\"><img [src]=\"image\" class=\"img-fluid\"></th>\r\n              </tr>             \r\n            </tbody>\r\n          </table>\r\n          \r\n        </div>\r\n        <!--Grid column-->\r\n\r\n      </div>\r\n      <!--Grid row-->\r\n\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row\">\r\n\r\n        <!--First column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <i class=\"fas fa-gem fa-3x blue-text\"></i>\r\n \r\n          <p class=\"font-weight-bold my-3\">Feature One</p>\r\n\r\n          <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/First column-->\r\n\r\n        <!--Second column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-chart-area fa-3x teal-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Two</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Second column-->\r\n\r\n        <!--Third column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-cogs fa-3x indigo-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Three</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Third column-->\r\n\r\n        <!--Fourth column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-cloud-upload-alt fa-3x deep-purple-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Four</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Fourth column-->\r\n\r\n      </div>\r\n      <!--/Grid row-->\r\n\r\n\r\n    </section>\r\n    <!--Section: Content-->\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec1\">\r\n\r\n    <div class=\"container z-depth-1 my-5 px-0\">\r\n\r\n        <!--Section: Content-->\r\n        <section class=\"panel p-5 my-md-5 text-center\">\r\n      \r\n          <!-- Section heading -->\r\n          <h3 class=\"text-center font-weight-bold text-dark mt-5 mb-3\">Contact Me</h3>\r\n    \r\n          <form class=\"mb-5 mx-md-5\" action=\"\">\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Name -->\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\r\n      \r\n              </div>\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Email -->\r\n                <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n      \r\n              </div>\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Phone -->\r\n                <input type=\"number\" id=\"phone\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone (optional)\">\r\n      \r\n              </div>\r\n            </div>\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 mb-4\">\r\n      \r\n                <!-- Subject -->\r\n                <input type=\"text\" id=\"subject\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" placeholder=\"Subject\">\r\n      \r\n              </div>\r\n            </div>\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n      \r\n                <div class=\"form-group mb-4\">\r\n                  <textarea class=\"form-control rounded\" id=\"message\" rows=\"3\" (keyup.enter)=\"submit()\" [(ngModel)]=\"message\" name=\"message\" placeholder=\"Message\"></textarea>\r\n                </div>\r\n      \r\n                <div class=\"text-center\">\r\n                  <button type=\"submit\" mdbBtn class=\"btn waves-light\" (click)=\"submit()\">Submit</button>\r\n                </div>\r\n                <div class=\"spacer d-flex justify-content-center\">\r\n                  <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n                  <p class=\"success\" *ngIf=\"success\">{{success}}</p>\r\n                  <p class=\"invalid\" *ngIf=\"invalid\">{{invalid}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      \r\n          </form>\r\n      \r\n        </section>\r\n        <!--Section: Content-->\r\n      \r\n      \r\n      </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upload/upload.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 py-5 z-depth-1\">\r\n\r\n\r\n    <!--Section: Content-->\r\n    <section class=\"px-md-5 mx-md-5 text-center dark-grey-text\">\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row d-flex justify-content-center\">\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-6 col-md-8\">\r\n\r\n          <h3 class=\"font-weight-bold\">AWS Rekognition</h3>\r\n\r\n                <p class=\"text-muted\">Upload the images you wish to compare faces with</p>\r\n                Name: <input [(ngModel)]=\"name\" (keyup.enter)=\"uploadFiles()\" class=\"btn-md ml-0 mb-5\" type=\"text\">\r\n                <input class=\"btn btn-md ml-0 mb-5\" type=\"file\" (change)=\"fileChange($event.target.files)\">\r\n                <a class=\"btn btn-info btn-md ml-0 mb-5\" (click)=\"uploadFiles()\" role=\"button\">Upload</a>\r\n\r\n                <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n\r\n                   <h5 *ngIf=\"message\" class=\"success\">{{message}}</h5> \r\n                   <table *ngIf=\"image\" mdbTable class=\"view display overlay z-depth-1-half\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"success\">{{display | titlecase}}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <th><img [src]=\"image\" class=\"img-fluid\"></th>\r\n                      </tr>             \r\n                    </tbody>\r\n                  </table>                                     \r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n      </div>\r\n      <!--Grid row-->\r\n\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row\">\r\n\r\n        <!--First column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <i class=\"fas fa-gem fa-3x blue-text\"></i>\r\n \r\n          <p class=\"font-weight-bold my-3\">Feature One</p>\r\n\r\n          <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/First column-->\r\n\r\n        <!--Second column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-chart-area fa-3x teal-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Two</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Second column-->\r\n\r\n        <!--Third column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-cogs fa-3x indigo-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Three</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Third column-->\r\n\r\n        <!--Fourth column-->\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <i class=\"fas fa-cloud-upload-alt fa-3x deep-purple-text\"></i>\r\n\r\n            <p class=\"font-weight-bold my-3\">Feature Four</p>\r\n  \r\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n        </div>\r\n        <!--/Fourth column-->\r\n\r\n      </div>\r\n      <!--/Grid row-->\r\n\r\n\r\n    </section>\r\n    <!--Section: Content-->\r\n\r\n\r\n  </div>"

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/compare/compare.component */ "./src/app/components/compare/compare.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'upload', component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"] },
    { path: 'compare', component: _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'upload' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: linear-gradient(to bottom, #8d1d01, #801a00); }\n\n.success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.btn {\n  background: linear-gradient(to bottom, #039be5, #0277bd); }\n\n.sign {\n  background: linear-gradient(to bottom, #039be5, #0277bd); }\n\n.footer {\n  background: linear-gradient(to bottom, #8d1d01, #801a00); }\n\n.foot {\n  background: #490f00; }\n\n.popup {\n  background: linear-gradient(to bottom, #fff8e1, #ece5ce); }\n\n.spacer {\n  margin: 2% 0% 2% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzdWZ5YVxcRG9jdW1lbnRzXFxSZXBvc2l0b3J5XFxJbWdSZWNBcHBcXEphdmFcXEF3c0ltZ1Jla0phdmFcXEltZ1JlY0FwcFxcc3JjXFx3ZWJhcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdEQUF5RCxFQUFBOztBQUc3RDtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSx3REFBd0QsRUFBQTs7QUFHNUQ7RUFDSSx3REFBd0QsRUFBQTs7QUFHNUQ7RUFDSSx3REFBd0QsRUFBQTs7QUFHNUQ7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx3REFBd0QsRUFBQTs7QUFFNUQ7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNlY3Rpb257XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbi8vIH1cclxubmF2e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgXHQjOGQxZDAxLCAjODAxYTAwKTtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzliZTUsICMwMjc3YmQpO1xyXG59XHJcblxyXG4uc2lnbntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzliZTUsICMwMjc3YmQpO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhkMWQwMSwgIzgwMWEwMCk7XHJcbn1cclxuXHJcbi5mb290e1xyXG4gICAgYmFja2dyb3VuZDogIzQ5MGYwMDtcclxufVxyXG4ucG9wdXB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmOGUxLCAjZWNlNWNlKTtcclxufVxyXG4uc3BhY2Vye1xyXG4gICAgbWFyZ2luOiAyJSAwJSAyJSAwJTtcclxufVxyXG4iXX0= */"

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
        this.title = "JS.Fofana Health";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/compare/compare.component */ "./src/app/components/compare/compare.component.ts");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"],
                _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_12__["CompareComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                _services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"],
                _services_subject_service__WEBPACK_IMPORTED_MODULE_10__["SubjectService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/compare/compare.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/compare/compare.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.column {\n  max-width: 50px;\n  max-height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJlL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcSW1nUmVjQXBwXFxKYXZhXFxBd3NJbWdSZWtKYXZhXFxJbWdSZWNBcHBcXHNyY1xcd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYXJlXFxjb21wYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5jb2x1bW57XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/compare/compare.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/compare/compare.component.ts ***!
  \*********************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompareComponent = /** @class */ (function () {
    function CompareComponent(service, memory, validate) {
        this.service = service;
        this.memory = memory;
        this.validate = validate;
        this.images = [];
        this.details = [];
        this.isSpinning = false;
        this.fileType = "data:image/png;base64,";
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.img1 = "";
        this.img2 = "";
    };
    CompareComponent.prototype.compareFaces = function () {
        var _this = this;
        this.names = [];
        this.images = [];
        this.details = [];
        this.results = 0;
        this.names.push(this.img1);
        this.names.push(this.img2);
        this.faces = {
            names: this.names
        };
        this.valid = this.validate.validCompare(this.faces);
        if (this.valid) {
            this.isSpinning = true;
            this.service.compareFaces(this.valid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function (data) {
                _this.faces = data;
                data.images.forEach(function (res) { return _this.images.push(_this.fileType + res); });
                _this.details = data.details;
                _this.results = data.results;
                _this.isSpinning = false;
            }, function (error) {
                _this.message = "Internal error.. retry or contact me";
                _this.isSpinning = false;
            });
        }
        if (!this.img1 || !this.img2) {
            this.message = "Please enter both names of faces to compare";
        }
        else {
            this.message = "";
        }
        this.img1 = "";
        this.img2 = "";
    };
    CompareComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    CompareComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] }
    ]; };
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/components/compare/compare.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec1 {\n  background-color: #e9d4b9;\n  background-image: repeating-linear-gradient(45deg, transparent 5px, rgba(11, 36, 45, 0.5) 5px, rgba(11, 36, 45, 0.5) 10px, rgba(211, 119, 111, 0) 10px, rgba(211, 119, 111, 0) 35px, rgba(211, 119, 111, 0.5) 35px, rgba(211, 119, 111, 0.5) 40px, rgba(11, 36, 45, 0.5) 40px, rgba(11, 36, 45, 0.5) 50px, rgba(11, 36, 45, 0) 50px, rgba(11, 36, 45, 0) 60px, rgba(211, 119, 111, 0.5) 60px, rgba(211, 119, 111, 0.5) 70px, rgba(247, 179, 85, 0.5) 70px, rgba(247, 179, 85, 0.5) 80px, rgba(247, 179, 85, 0) 80px, rgba(247, 179, 85, 0) 90px, rgba(211, 119, 111, 0.5) 90px, rgba(211, 119, 111, 0.5) 110px, rgba(211, 119, 111, 0) 110px, rgba(211, 119, 111, 0) 120px, rgba(11, 36, 45, 0.5) 120px, rgba(11, 36, 45, 0.5) 140px), repeating-linear-gradient(135deg, transparent 5px, rgba(11, 36, 45, 0.5) 5px, rgba(11, 36, 45, 0.5) 10px, rgba(211, 119, 111, 0) 10px, rgba(211, 119, 111, 0) 35px, rgba(211, 119, 111, 0.5) 35px, rgba(211, 119, 111, 0.5) 40px, rgba(11, 36, 45, 0.5) 40px, rgba(11, 36, 45, 0.5) 50px, rgba(11, 36, 45, 0) 50px, rgba(11, 36, 45, 0) 60px, rgba(211, 119, 111, 0.5) 60px, rgba(211, 119, 111, 0.5) 70px, rgba(247, 179, 85, 0.5) 70px, rgba(247, 179, 85, 0.5) 80px, rgba(247, 179, 85, 0) 80px, rgba(247, 179, 85, 0) 90px, rgba(211, 119, 111, 0.5) 90px, rgba(211, 119, 111, 0.5) 110px, rgba(211, 119, 111, 0) 110px, rgba(211, 119, 111, 0) 140px, rgba(11, 36, 45, 0.5) 140px, rgba(11, 36, 45, 0.5) 160px); }\n\n.panel {\n  padding-left: 10%;\n  padding-right: 10%;\n  background-color: #ece5ce;\n  background-image: linear-gradient(90deg, transparent 50%, #e4dcc2 50%);\n  background-size: 50px 50px;\n  border-radius: 5px; }\n\n.btn {\n  color: white;\n  background: linear-gradient(to bottom, #212121, #000000);\n  border-radius: 50px; }\n\n.success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.spacer {\n  margin: 2% 0% 2% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcSW1nUmVjQXBwXFxKYXZhXFxBd3NJbWdSZWtKYXZhXFxJbWdSZWNBcHBcXHNyY1xcd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQW1DO0VBQ3ZDLDIzQ0FhQyxFQUFBOztBQUdEO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0VBQXNFO0VBQ3RFLDBCQUEwQjtFQUUxQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osd0RBQXdEO0VBQ3hELG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYzF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzQsIDUzJSwgODIlKTtcclxuYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNXB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgNXB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgMTBweCxcclxuICBoc2xhKDUsIDUzJSwgNjMlLCAwKSAxMHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwKSAzNXB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwLjUpIDM1cHgsIGhzbGEoNSwgNTMlLCA2MyUsIDAuNSkgNDBweCxcclxuICBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgNDBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwLjUpIDUwcHgsIGhzbGEoMTk3LCA2MiUsIDExJSwgMCkgNTBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwKSA2MHB4LFxyXG4gIGhzbGEoNSwgNTMlLCA2MyUsIDAuNSkgNjBweCwgaHNsYSg1LCA1MyUsIDYzJSwgMC41KSA3MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMC41KSA3MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMC41KSA4MHB4LFxyXG4gIGhzbGEoMzUsIDkxJSwgNjUlLCAwKSA4MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMCkgOTBweCwgaHNsYSg1LCA1MyUsIDYzJSwgMC41KSA5MHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwLjUpIDExMHB4LFxyXG4gIGhzbGEoNSwgNTMlLCA2MyUsIDApIDExMHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwKSAxMjBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwLjUpIDEyMHB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgMTQwcHhcclxuICApLFxyXG5yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNXB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgNXB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgMTBweCxcclxuICBoc2xhKDUsIDUzJSwgNjMlLCAwKSAxMHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwKSAzNXB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwLjUpIDM1cHgsIGhzbGEoNSwgNTMlLCA2MyUsIDAuNSkgNDBweCxcclxuICBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgNDBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwLjUpIDUwcHgsIGhzbGEoMTk3LCA2MiUsIDExJSwgMCkgNTBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwKSA2MHB4LFxyXG4gIGhzbGEoNSwgNTMlLCA2MyUsIDAuNSkgNjBweCwgaHNsYSg1LCA1MyUsIDYzJSwgMC41KSA3MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMC41KSA3MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMC41KSA4MHB4LFxyXG4gIGhzbGEoMzUsIDkxJSwgNjUlLCAwKSA4MHB4LCBoc2xhKDM1LCA5MSUsIDY1JSwgMCkgOTBweCwgaHNsYSg1LCA1MyUsIDYzJSwgMC41KSA5MHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwLjUpIDExMHB4LFxyXG4gIGhzbGEoNSwgNTMlLCA2MyUsIDApIDExMHB4LCBoc2xhKDUsIDUzJSwgNjMlLCAwKSAxNDBweCwgaHNsYSgxOTcsIDYyJSwgMTElLCAwLjUpIDE0MHB4LCBoc2xhKDE5NywgNjIlLCAxMSUsIDAuNSkgMTYwcHhcclxuKTtcclxufVxyXG5cclxuLnBhbmVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlNWNlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCA1MCUsICNlNGRjYzIgNTAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZjhlMSwgI2VjZTVjZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyMTIxMjEsICMwMDAwMDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgICBtYXJnaW46IDIlIDAlIDIlIDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var src_app_models_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/email */ "./src/app/models/email.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = /** @class */ (function () {
    function ContactComponent(service, memory, validate) {
        this.service = service;
        this.memory = memory;
        this.validate = validate;
        this.mail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_4__["Email"]();
        this.validMail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_4__["Email"]();
        this.isSpinning = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.setMail = function () {
        this.mail.name = this.name;
        this.mail.email = this.email;
        this.mail.phone = this.phone;
        this.mail.subject = this.subject;
        this.mail.message = this.message;
        this.validMail = this.validate.validRequest(this.mail);
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.setMail();
        this.reset();
        if (this.validMail) {
            this.isSpinning = true;
            this.service.sendEmail(this.validMail)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function () {
                _this.success = "Message Sent";
                _this.isSpinning = false;
            });
        }
    };
    ContactComponent.prototype.reset = function () {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.subject = "";
        this.message = "";
        this.success = "";
        this.invalid = "";
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    ContactComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
    ]; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\n  color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvQzpcXFVzZXJzXFxzdWZ5YVxcRG9jdW1lbnRzXFxSZXBvc2l0b3J5XFxJbWdSZWNBcHBcXEphdmFcXEF3c0ltZ1Jla0phdmFcXEltZ1JlY0FwcFxcc3JjXFx3ZWJhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVwbG9hZFxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadComponent = /** @class */ (function () {
    function UploadComponent(service, memory, validate) {
        this.service = service;
        this.memory = memory;
        this.validate = validate;
        this.formData = new FormData();
        this.fileType = "data:image/png;base64,";
        this.isSpinning = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.name = "";
    };
    UploadComponent.prototype.fileChange = function (files) {
        if (files && files.length > 0) {
            var file = files[0];
            this.formData.append('file', file);
        }
    };
    UploadComponent.prototype.uploadFiles = function () {
        var _this = this;
        this.display = "";
        this.image = "";
        this.valid = this.validate.validUpload(this.name);
        this.validFile = this.validate.validFile(this.formData);
        if (this.valid && this.validFile) {
            this.isSpinning = true;
            this.service.upload(this.valid, this.formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function (data) {
                _this.upload = data;
                _this.display = data.name;
                _this.message = data.process;
                _this.image = _this.fileType + data.image;
                _this.isSpinning = false;
            }, function (error) {
                _this.message = "Internal error.. retry or contact me";
                _this.isSpinning = false;
            });
        }
        if (!this.name) {
            this.message = "Please enter name for image";
        }
        else {
            this.message = "";
        }
        this.name = "";
        this.formData = new FormData();
    };
    UploadComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
        { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] }
    ]; };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/components/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            _services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/models/email.ts":
/*!*********************************!*\
  !*** ./src/app/models/email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService() {
        this.message = "";
        this.username = "sfofana";
        this.password = "UofH2011";
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: 'Basic ' + btoa(this.username + ":" + this.password)
            }
        });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Internal Error');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Server Error');
            }
        }));
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = /** @class */ (function () {
    function SubjectService() {
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.eUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailUrl;
        this.compUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].compare;
        this.upUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].upload;
    }
    UserService.prototype.sendEmail = function (message) {
        return this.http.post(this.eUrl, message);
    };
    UserService.prototype.upload = function (fileName, file) {
        return this.http.post(this.upUrl + "/" + fileName, file);
    };
    UserService.prototype.compareFaces = function (faces) {
        return this.http.post(this.compUrl, faces);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/email */ "./src/app/models/email.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validRequest = function (message) {
        var validMessage = new _models_email__WEBPACK_IMPORTED_MODULE_1__["Email"]();
        validMessage = null;
        if (!(message.name || message.email || message.phone || message.subject || message.message)) {
            validMessage = null;
        }
        if (message.name && message.email && message.subject && message.message) {
            validMessage = message;
        }
        return validMessage;
    };
    ValidationService.prototype.validCompare = function (faces) {
        if (faces.names[0] && faces.names[1]) {
            return faces;
        }
        else {
            return null;
        }
    };
    ValidationService.prototype.validUpload = function (name) {
        if (name) {
            return name;
        }
        else {
            return null;
        }
    };
    ValidationService.prototype.validFile = function (file) {
        if (file) {
            return file;
        }
        else {
            return null;
        }
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    emailUrl: 'https://node-jsfofana-bank-v2.herokuapp.com/api/v1/email/send',
    upload: 'http://ec2-3-17-26-55.us-east-2.compute.amazonaws.com:9000/api/v1/upload',
    compare: 'http://ec2-3-17-26-55.us-east-2.compute.amazonaws.com:9000/api/v1/compare'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sufya\Documents\Repository\ImgRecApp\Java\AwsImgRekJava\ImgRecApp\src\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map