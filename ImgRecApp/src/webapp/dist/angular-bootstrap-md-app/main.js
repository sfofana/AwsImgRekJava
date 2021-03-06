(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n\r\n  <!-- Collapse button -->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\"\r\n    aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Collapsible content -->\r\n  <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\r\n    <div class=\"container\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link waves-light text-light\" id=\"upload\" routerLink=\"/upload\" mdbWavesEffect\r\n            [@animator]=\"upload\" (@animator.done)=\"upAnimate('stop')\" \r\n            (mouseover)=\"upAnimate('start')\">Upload</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light text-light\"id=\"compare\" routerLink=\"/compare\" mdbWavesEffect\r\n          [@animator]=\"compare\" (@animator.done)=\"compAnimate('stop')\" \r\n          (mouseover)=\"compAnimate('start')\">Compare Faces</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light text-light\" id=\"contact\" routerLink=\"/contact\" mdbWavesEffect\r\n        [@animator]=\"contact\" (@animator.done)=\"contAnimate('stop')\" \r\n        (mouseover)=\"contAnimate('start')\">Contact <mdb-icon fas icon=\"envelope\" class=\"white-text\"></mdb-icon></a>\r\n    </li>\r\n    </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Collapsible content -->\r\n\r\n</nav> \r\n\r\n<section [@animator]=\"preparedRoute(outlet)\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</section>\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer font-small\">\r\n \r\n  <!-- Footer Elements -->\r\n  <div class=\"container\">\r\n\r\n    <!-- Grid row-->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-12 py-5\">\r\n        <div class=\"mb-5 flex-center\">\r\n          <!--Linkedin -->\r\n          <a class=\"li-ic\" rel=\"noopener noreferrer\" href=\"http://linkedin.com/in/sufyan-fofana-2a743584\" target=\"_blank\">\r\n            <em class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </em>\r\n          </a>\r\n          <!--GitHub-->\r\n          <a class=\"ins-ic\" rel=\"noopener noreferrer\" href=\"https://github.com/sfofana/AwsImgRekJava\" target=\"_blank\">\r\n            <em class=\"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x\"> </em>\r\n          </a>\r\n          <!--Youtube-->\r\n          <a class=\"pin-ic\" rel=\"noopener noreferrer\" href=\"https://www.youtube.com/channel/UCQlhey4SbBsnpIRtrvaEJ6g\" target=\"_blank\">\r\n            <em class=\"fab fa-youtube fa-lg white-text fa-2x\"> </em>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row-->\r\n\r\n  </div>\r\n  <!-- Footer Elements -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"foot text-center py-3\">\r\n    \r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/compare/compare.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/compare/compare.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{redirect: dotLoader}\" class=\"container my-5 py-5 z-depth-1\">\r\n\r\n  <div *ngIf=\"dotLoader\" \r\n    id=\"dot-loader\"\r\n    class=\"row d-flex justify-content-center\">\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n  </div>\r\n    <!--Section: Content-->\r\n    <section class=\"px-md-5 mx-md-5 text-center dark-grey-text\">\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row d-flex justify-content-center\">\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-6 col-md-8\">\r\n\r\n          <div class=\"aws mask rgba-white-light\">\r\n            <img src=\"assets/images/awslogo.PNG\" class=\"img-fluid\" alt=\"\">\r\n          </div>   \r\n\r\n          <p class=\"text-muted\">Compare faces and review the results</p>\r\n          <div class=\"md-form mb-5\">\r\n            <input mdbInput id=\"img1\" [(ngModel)]=\"img1\" (keyup.enter)=\"compareFaces()\" \r\n            class=\"form-control\" type=\"text\">\r\n            <label for=\"img1\">1st Image</label>\r\n          </div> \r\n          <div class=\"md-form mb-5\">\r\n            <input mdbInput id=\"img2\" [(ngModel)]=\"img2\" (keyup.enter)=\"compareFaces()\" \r\n            class=\"form-control\" type=\"text\">\r\n            <label for=\"img2\">2nd Image</label>\r\n          </div> \r\n          <a class=\"btn waves-light\" id=\"btn\"\r\n          [@animator]=\"button\" (@animator.done)=\"btnAnimate('stop')\" \r\n          (click)=\"compareFaces(); btnAnimate('start')\" role=\"button\">Compare\r\n          </a>\r\n\r\n          <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n\r\n          <div *ngIf=\"results > 1\">\r\n            <h5 *ngIf=\"results > 70\" class=\"success\" [@animator]=\"bouncer\">{{results | number:'2.1-2'}}% similarity</h5> \r\n            <h5 *ngIf=\"results < 70\" class=\"invalid\" [@animator]=\"shaker\">Less than 70% similarity</h5>\r\n          </div>      \r\n\r\n          <h5 *ngIf=\"message\" class=\"invalid\" [@animator]=\"shaker\">{{message}}</h5>\r\n\r\n          <div *ngIf=\"details.length > 0\" [@animator]=\"zoomIn\">\r\n            <table mdbTable class=\"view display overlay z-depth-1-half\" aria-describedby=\"compared\">\r\n              <thead>\r\n                <tr>\r\n                  <th id=\"detail\" *ngFor=\"let detail of details\" class=\"success\">{{detail | titlecase}}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <th id=\"image\" *ngFor=\"let image of images\"><img [src]=\"image\" class=\"img-fluid\" alt=\"\"></th>\r\n                </tr>             \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          \r\n          \r\n        </div>\r\n        <!--Grid column-->\r\n\r\n      </div>\r\n      <!--Grid row-->\r\n\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row\">       \r\n\r\n        <!--Second column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-chart-area fa-3x green-text\"\r\n            [@animator]=\"chart\" (@animator.done)=\"chartAnimate('stop')\" \r\n            (mouseover)=\"chartAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Microservices</p>\r\n  \r\n            <p class=\"text-muted\">Using Spring Boot and .NET Core</p>\r\n        </div>\r\n        <!--/Second column-->\r\n\r\n        <!--Third column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-cogs fa-3x grey-text\"\r\n            [@animator]=\"cog\" (@animator.done)=\"cogAnimate('stop')\" \r\n            (mouseover)=\"cogAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Rekognition</p>\r\n  \r\n            <p class=\"text-muted\">Results are processed and displayed</p>\r\n        </div>\r\n        <!--/Third column-->\r\n\r\n        <!--Fourth column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-cloud-upload-alt fa-3x blue-text\"\r\n            [@animator]=\"cloud\" (@animator.done)=\"cloudAnimate('stop')\" \r\n            (mouseover)=\"cloudAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Cloud</p>\r\n  \r\n            <p class=\"text-muted\">Compare images from a cloud storage bucket</p>\r\n        </div>\r\n        <!--/Fourth column-->\r\n\r\n      </div>\r\n      <!--/Grid row-->\r\n\r\n\r\n    </section>\r\n    <!--Section: Content-->\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec1\">\r\n\r\n    <div class=\"container z-depth-1 my-5 px-0\">\r\n\r\n        <!--Section: Content-->\r\n        <section class=\"panel p-5 my-md-5 text-center\">\r\n      \r\n          <!-- Section heading -->\r\n          <h3 class=\"text-center font-weight-bold text-dark mt-5 mb-3\">Contact Me</h3>\r\n    \r\n          <form class=\"mb-5 mx-md-5\" action=\"\">\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Name -->\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\r\n      \r\n              </div>\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Email -->\r\n                <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n      \r\n              </div>\r\n              <div class=\"col-md-4 mb-4\">\r\n      \r\n                <!-- Phone -->\r\n                <input type=\"number\" id=\"phone\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone (optional)\">\r\n      \r\n              </div>\r\n            </div>\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 mb-4\">\r\n      \r\n                <!-- Subject -->\r\n                <input type=\"text\" id=\"subject\" [(ngModel)]=\"subject\" name=\"subject\" class=\"form-control\" placeholder=\"Subject\">\r\n      \r\n              </div>\r\n            </div>\r\n      \r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n      \r\n                <div class=\"form-group mb-4\">\r\n                  <textarea class=\"form-control rounded\" id=\"message\" rows=\"3\" (keyup.enter)=\"submit()\" [(ngModel)]=\"message\" name=\"message\" placeholder=\"Message\"></textarea>\r\n                </div>\r\n      \r\n                <div class=\"text-center\">\r\n                  <button type=\"submit\" mdbBtn class=\"btn waves-light\" \r\n                  [@animator]=\"button\" (@animator.done)=\"btnReset()\" \r\n                  (click)=\"submit(); btnAnimate('heartBeat')\">Submit\r\n                </button>\r\n                </div>\r\n                <div class=\"spacer d-flex justify-content-center\">\r\n                  <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n                  <p class=\"success\" *ngIf=\"success\" [@animator]=\"bouncer\">{{success}}</p>\r\n                  <p class=\"invalid\" *ngIf=\"invalid\" [@animator]=\"bouncer\">{{invalid}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      \r\n          </form>\r\n      \r\n        </section>\r\n        <!--Section: Content-->\r\n      \r\n      \r\n      </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\n\n\n    <!-- Section: Block Content -->\n    <section class=\"dark-grey-text text-center\">\n  \n      <h3 class=\"text-center font-weight-bold mb-4 pb-2\">\n        <em class=\"fas fa-quote-left pr-2\"></em>\n        Another hot cup of Java? No thanks, I'd prefer a cup of C#\n      </h3>  \n      <!-- Grid row -->\n      <div class=\"row\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-12 mb-4\">\n  \n          <!-- Card -->\n          <div class=\"card card-image\" style=\"background-image: url(assets/images/ai.PNG);\">\n            <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 px-md-5 rounded\">\n              <div>\n                <h3 class=\"py-3 font-weight-bold\" id=\"title\">\n                  <strong>Bio Unique</strong>\n                </h3>\n                <p class=\"pb-3\">Face recognition application using Aws Rekognition, Spring Boot and .NET Core.\n                    Compare faces of all kinds and rate thier similarity want to try things out for yourself? \n                    Click the button below to get access and get started.\n                </p>\n                \n              </div>\n            </div>\n          </div>\n          <!-- Card -->\n  \n        </div>\n        <!-- Grid column -->\n  \n      </div>\n      <!-- Grid row -->\n  <a class=\"btn waves-light\" id=\"access\" \n                [@animator]=\"button\" (@animator.done)=\"btnAnimate('stop')\"\n                (click)=\"getAccess(); btnAnimate('start')\" role=\"button\">Get Access</a>\n    </section>\n    <!-- Section: Block Content -->\n  </div>\n\n  <div class=\"spacer d-flex justify-content-center\">\n    <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\n    <h5 class=\"success\" *ngIf=\"success\" [@animator]=\"bouncer\">{{success}}</h5>\n    <h5 class=\"invalid\" *ngIf=\"message\" [@animator]=\"shaker\">{{message}}</h5>\n  </div>\n\n  <div class=\"container my-5\">\n\n\n    <!--Section: Content-->\n    <section class=\"dark-grey-text\">\n  \n      <!-- Section heading -->\n      <h3 class=\"text-center font-weight-bold mb-4 pb-2\">Routed to this page again?</h3>\n      <hr class=\"w-header\">\n      <!-- Section description -->\n      <p class=\"lead text-center w-responsive mx-auto text-muted mt-4 pt-2 mb-5\">Requesting access is required and is as simple as clicking the \"Get Access\" button above</p>\n      \n      <!--First row-->\n      <div class=\"row\">\n  \n        <!--First column-->\n        <div class=\"col-md-6 mb-4\">\n  \n          <!-- Card -->\n          <a class=\"card hoverable\">\n            \n            <!-- Card content -->\n            <div class=\"card-body\">\n  \n                <div class=\"media\">\n                <span class=\"card-img-100 d-inline-flex justify-content-center align-items-center lighten-3 mr-4\">\n                  <em class=\"fab fa-react fa-4x text-info\"></em>\n                </span>\n                <div class=\"media-body\">\n                  <h5 class=\"dark-grey-text mb-3\">Had access before?</h5>\n                  <p class=\"font-weight-light text-muted mb-0\">Your session may have ended, but can be renewd by \n                      simply clicking the \"Get Access\" button above.</p>\n                </div>\n              </div>\n              \n            </div>\n  \n          </a>\n          <!-- Card -->\n  \n        </div>\n        <!--First column-->\n  \n        <!--Second column-->\n        <div class=\"col-md-6 mb-4\">\n  \n          <!-- Card -->\n          <a class=\"card hoverable\">\n            \n            <!-- Card content -->\n            <div class=\"card-body\">\n  \n                <div class=\"media\">\n                <span class=\"card-img-100 d-inline-flex justify-content-center align-items-center lighten-3 mr-4\">\n                  <em class=\"far fa-user fa-4x blue-text\"></em>\n                </span>\n                <div class=\"media-body\">\n                  <h5 class=\"dark-grey-text mb-3\">Still not working?</h5>\n                  <p class=\"font-weight-light text-muted mb-0\">If you are still not getting access you can \n                      contact me and I will get back to you as soon as I can.</p>\n                </div>\n              </div>\n              \n            </div>\n  \n          </a>\n          <!-- Card -->\n          <!-- Card -->\n  \n        </div>\n        <!--Second column-->\n  \n      </div>\n      <!--First row-->\n  \n      </section>\n    \n    \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upload/upload.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{redirect: dotLoader}\" class=\"container my-5 py-5 z-depth-1\">\r\n\r\n  <div *ngIf=\"dotLoader\" \r\n    id=\"dot-loader\"\r\n    class=\"row d-flex justify-content-center\">\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n  </div>\r\n\r\n    <!--Section: Content-->\r\n    <section class=\"px-md-5 mx-md-5 text-center dark-grey-text\">\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row d-flex justify-content-center\">\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-6 col-md-8\">\r\n\r\n          <div class=\"aws mask rgba-white-light\">\r\n            <img src=\"assets/images/awslogo.PNG\" class=\"img-fluid\" alt=\"\">\r\n          </div>  \r\n\r\n                <p class=\"text-muted\">Upload the images you wish to compare faces with</p>\r\n\r\n                <div class=\"md-form mb-5\">\r\n                  <input mdbInput id=\"name\" [(ngModel)]=\"name\" (keyup.enter)=\"uploadFiles()\" \r\n                  class=\"form-control\" type=\"text\">\r\n                  <label for=\"name\">Name</label>\r\n                </div>           \r\n\r\n                <div class=\"zone d-flex justify-content-center\">\r\n                  <div class=\"dropZ\">                                    \r\n                    <div class=\"selectFile\"> \r\n                    <p>Select File</p>         \r\n                      <label class=\"l waves-light fas fa-file-upload fa-3x orange-text\">\r\n                        <input mdbInput class=\"btn btn-md ml-0 mb-5\" type=\"file\" \r\n                        (change)=\"fileChange($event.target.files)\">\r\n                      </label>                                    \r\n                      <p>File size limit : 10 MB</p>\r\n                    </div>            \r\n                  </div>         \r\n                </div>\r\n\r\n                <a class=\"btn waves-light\" id=\"btn\"\r\n                [@animator]=\"button\" (@animator.done)=\"btnAnimate('stop')\"\r\n                (click)=\"uploadFiles(); btnAnimate('start')\" role=\"button\">Upload</a>\r\n\r\n                <div *ngIf=\"isSpinning\" class=\"spinner-border text-danger\" role=\"status\"></div>\r\n\r\n                  <h5 *ngIf=\"results\" class=\"success\" [@animator]=\"bouncer\">{{results}}</h5> \r\n                   <h5 *ngIf=\"message\" class=\"invalid\" [@animator]=\"shaker\">{{message}}</h5> \r\n                   <h5 *ngIf=\"alert\" class=\"invalid\" [@animator]=\"shaker\">{{alert}}</h5> \r\n                   <table *ngIf=\"image\" mdbTable class=\"view display overlay z-depth-1-half\" \r\n                   [@animator]=\"zoomIn\" aria-describedby=\"uploaded\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th id=\"display\" class=\"success\">{{display | titlecase}}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <th id=\"image\"><img [src]=\"image\" class=\"img-fluid\" alt=\"\"></th>\r\n                      </tr>             \r\n                    </tbody>\r\n                  </table>                                     \r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n      </div>\r\n      <!--Grid row-->\r\n\r\n\r\n      <!--Grid row-->\r\n      <div class=\"row\">\r\n\r\n        <!--Second column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-chart-area fa-3x deep-purple-text\"\r\n            [@animator]=\"chart\" (@animator.done)=\"chartAnimate('stop')\"\r\n            (mouseover)=\"chartAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Microservices</p>\r\n  \r\n            <p class=\"text-muted\">Using Spring Boot and .NET Core</p>\r\n        </div>\r\n        <!--/Second column-->\r\n\r\n        <!--Third column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-cogs fa-3x red-text\"\r\n            [@animator]=\"cog\" (@animator.done)=\"cogAnimate('stop')\"\r\n            (mouseover)=\"cogAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Upload</p>\r\n  \r\n            <p class=\"text-muted\">Upload images to a cloud storage bucket</p>\r\n        </div>\r\n        <!--/Third column-->\r\n\r\n        <!--Fourth column-->\r\n        <div class=\"col-lg-4 col-md-6\">\r\n            <em class=\"fas fa-cloud-upload-alt fa-3x teal-text\"\r\n            [@animator]=\"cloud\" (@animator.done)=\"cloudAnimate('stop')\"\r\n            (mouseover)=\"cloudAnimate('start')\"></em>\r\n\r\n            <p class=\"font-weight-bold my-3\">Cloud</p>\r\n  \r\n            <p class=\"text-muted\">Images are saved to the cloud storage bucket</p>\r\n        </div>\r\n        <!--/Fourth column-->\r\n\r\n      </div>\r\n      <!--/Grid row-->\r\n\r\n\r\n    </section>\r\n    <!--Section: Content-->\r\n\r\n\r\n  </div>"

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

/***/ "./src/app/animations/animation.ts":
/*!*****************************************!*\
  !*** ./src/app/animations/animation.ts ***!
  \*****************************************/
/*! exports provided: pulse, fadeInLeft, fadeInRight, flipInY, heartBeat, slideInUp, slideDotLoader, zoomIn, bounce, shake, tada, rotateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return pulse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return fadeInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipInY", function() { return flipInY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heartBeat", function() { return heartBeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUp", function() { return slideInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDotLoader", function() { return slideDotLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return shake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return tada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateIn", function() { return rotateIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var pulse = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 1 })
];
var fadeInLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-25%, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var fadeInRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(25%, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var flipInY = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', offset: 0.6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', offset: 1 })
];
var heartBeat = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.14 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0.28 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.42 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: .70 })
];
var slideInUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var slideDotLoader = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opcaity: .3, transform: 'scale(2)', offset: .5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 1 })
];
var zoomIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 })
];
var bounce = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .43 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: .53 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -7px, 0) scaleY(1.05)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0) scaleY(0.95)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: .9 }),
];
var shake = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10px, 0, 0)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-10px, 0, 0)', offset: .9 })
];
var tada = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: .1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .5 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .7 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: .9 })
];
var rotateIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];


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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { animation: 'fade' } },
    { path: 'upload', component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], data: { animation: 'isLeft' } },
    { path: 'compare', component: _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], data: { animation: 'isRight' } },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
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
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(animation) {
        this.animation = animation;
        this.title = "Bio Unique";
        /**
         * Attributes needed for the animations and transitions
         */
        this.upload = "";
        this.compare = "";
        this.contact = "";
    }
    /**
     * Determines route animation based on router outlet
     * data
     * @param outlet The data contained in the router
     * outlet
     */
    AppComponent.prototype.preparedRoute = function (outlet) {
        return outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation'];
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AppComponent.prototype.upAnimate = function (state) {
        this.upload = this.animation.dashAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AppComponent.prototype.compAnimate = function (state) {
        this.compare = this.animation.dashAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AppComponent.prototype.contAnimate = function (state) {
        this.contact = this.animation.dashAnimate(state);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_2__["AnimationService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["zoomIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => isLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInLeft"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => isRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('isLeft => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('isRight => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInLeft"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => pulse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_1__["pulse"]))),
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_animation_service__WEBPACK_IMPORTED_MODULE_2__["AnimationService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/compare/compare.component */ "./src/app/components/compare/compare.component.ts");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/logging.service */ "./src/app/services/logging.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"],
                _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_13__["CompareComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services_logging_service__WEBPACK_IMPORTED_MODULE_17__["LoggingService"],
                _services_validation_service__WEBPACK_IMPORTED_MODULE_10__["ValidationService"],
                _services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
                _services_animation_service__WEBPACK_IMPORTED_MODULE_15__["AnimationService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["HttpInterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = ".success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.column {\n  max-width: 50px;\n  max-height: 50px; }\n\n.aws {\n  opacity: .7; }\n\n.btn {\n  color: white;\n  background: linear-gradient(to bottom, #212121, #000000);\n  border-radius: 50px;\n  margin: 5%; }\n\n.redirect {\n  opacity: .6; }\n\n#dot-loader {\n  position: relative;\n  margin: 2rem auto;\n  width: 15rem; }\n\n#dot-loader div {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #CC0000;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-animation: slideDotLoader 1s infinite;\n          animation: slideDotLoader 1s infinite; }\n\n#dot-loader div:nth-child(1) {\n  -webkit-animation-delay: .1s;\n          animation-delay: .1s; }\n\n#dot-loader div:nth-child(2) {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; }\n\n#dot-loader div:nth-child(3) {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s; }\n\n#dot-loader div:nth-child(4) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n\n#dot-loader div:nth-child(5) {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n@-webkit-keyframes slideDotLoader {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes slideDotLoader {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJlL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcSW1nUmVjQXBwXFxKYXZhXFxBd3NJbWdSZWtKYXZhXFxJbWdSZWNBcHBcXHNyY1xcd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYXJlXFxjb21wYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osd0RBQXdEO0VBQ3hELG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFFSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDZDQUFxQztVQUFyQyxxQ0FBcUMsRUFBQTs7QUFHekM7RUFBOEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUNsRDtFQUE4Qiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBQ2xEO0VBQThCLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFDbEQ7RUFBOEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUNsRDtFQUE4Qiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR2xEO0VBQ0k7SUFBSywyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFDeEI7SUFBTSxXQUFXO0lBQUUsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ3RDO0lBQU8sMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7O0FBSDlCO0VBQ0k7SUFBSywyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFDeEI7SUFBTSxXQUFXO0lBQUUsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ3RDO0lBQU8sMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5pbnZhbGlke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uY29sdW1ue1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmF3c3tcclxuICAgIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMjEyMSwgIzAwMDAwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLy8gRG90IExvYWRlclxyXG4ucmVkaXJlY3R7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuI2RvdC1sb2FkZXJcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbiNkb3QtbG9hZGVyIGRpdlxyXG57XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0MwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvdExvYWRlciAxcyBpbmZpbml0ZTtcclxufVxyXG5cclxuI2RvdC1sb2FkZXIgZGl2Om50aC1jaGlsZCgxKXsgYW5pbWF0aW9uLWRlbGF5OiAuMXM7IH1cclxuI2RvdC1sb2FkZXIgZGl2Om50aC1jaGlsZCgyKXsgYW5pbWF0aW9uLWRlbGF5OiAuMnM7IH1cclxuI2RvdC1sb2FkZXIgZGl2Om50aC1jaGlsZCgzKXsgYW5pbWF0aW9uLWRlbGF5OiAuM3M7IH1cclxuI2RvdC1sb2FkZXIgZGl2Om50aC1jaGlsZCg0KXsgYW5pbWF0aW9uLWRlbGF5OiAuNHM7IH1cclxuI2RvdC1sb2FkZXIgZGl2Om50aC1jaGlsZCg1KXsgYW5pbWF0aW9uLWRlbGF5OiAuNXM7IH1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG90TG9hZGVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gICAgNTAlIHsgb3BhY2l0eTogLjM7IHRyYW5zZm9ybTogc2NhbGUoMik7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbn1cclxuLy8gRW5kIERvdCBMb2FkZXIiXX0= */"

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
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/logging.service */ "./src/app/services/logging.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
    function CompareComponent(service, log, router, memory, validate, animation) {
        this.service = service;
        this.log = log;
        this.router = router;
        this.memory = memory;
        this.validate = validate;
        this.animation = animation;
        this.images = [];
        this.details = [];
        /**
         * Attributes needed for the animations and transitions
         */
        this.button = "";
        this.bouncer = "bounce";
        this.zoomIn = "zoom";
        this.shaker = "shake";
        this.chart = "";
        this.cog = "";
        this.cloud = "";
        this.isSpinning = false;
        /**
         * Image src from string format
         */
        this.fileType = "data:image/png;base64,";
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.img1 = "";
        this.img2 = "";
        this.time = 10000;
        this.dotLoader = false;
        this.component = "CompareComponent";
        this.log.info("[" + this.component + "] === page loaded");
    };
    /**
     * News all elements, adds image names to Compare object
     * names attribute, validates names using ValidationService,
     * sets spinner to true only if names are valid, subscribes
     * to http post request using UserService, sets all subscription
     * data with its coresponding elements and spinner is set to false.
     * In case off error, dot loader is set to true, local storage
     * is cleared and the UI is redirected to the home page based
     * on the timer set number.
     */
    CompareComponent.prototype.compareFaces = function () {
        var _this = this;
        this.names = [];
        this.images = [];
        this.details = [];
        this.results = 0;
        this.message = "";
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
                _this.log.info("[" + _this.component + "] === successfully retrieved results");
            }, function (error) {
                _this.message = "Internal error.. retry or contact me";
                _this.isSpinning = false;
                _this.dotLoader = true;
                _this.log.info("[" + _this.component + "] === error either server not running or JWT token is expired");
                localStorage.clear();
                setTimeout(function () { return _this.router.navigate(['/home']); }, _this.time);
            });
            this.log.post()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function () {
                _this.log.debug("[" + _this.component + "] === successfully updated frontend logs");
            }, function (error) {
                _this.log.debug("[" + _this.component + "] === error when updating frontend logs");
            });
        }
        if (!this.img1 || !this.img2) {
            this.message = "Please enter both names of faces to compare";
            this.log.info("[" + this.component + "] === user did not enter 2 names");
        }
        else {
            this.message = "";
        }
        this.img1 = "";
        this.img2 = "";
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    CompareComponent.prototype.btnAnimate = function (state) {
        this.button = this.animation.btnAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    CompareComponent.prototype.chartAnimate = function (state) {
        this.chart = this.animation.chartAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    CompareComponent.prototype.cogAnimate = function (state) {
        this.cog = this.animation.cogAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    CompareComponent.prototype.cloudAnimate = function (state) {
        this.cloud = this.animation.cloudAnimate(state);
    };
    CompareComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
        this.log.info("[" + this.component + "] === unsubscribe from compareFaces API");
    };
    CompareComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] },
        { type: _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_6__["AnimationService"] }
    ]; };
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/compare/compare.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => heartBeat', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => bounce', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(650, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["bounce"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => zoom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["zoomIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => shake', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["shake"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => tada', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["tada"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["rotateIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => popup', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["slideInUp"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/components/compare/compare.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"],
            _services_animation_service__WEBPACK_IMPORTED_MODULE_6__["AnimationService"]])
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
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/logging.service */ "./src/app/services/logging.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
    function ContactComponent(service, log, memory, validate) {
        this.service = service;
        this.log = log;
        this.memory = memory;
        this.validate = validate;
        this.mail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_4__["Email"]();
        this.validMail = new src_app_models_email__WEBPACK_IMPORTED_MODULE_4__["Email"]();
        /**
         * Attributes needed for the animations and transitions
         */
        this.isSpinning = false;
        this.button = "";
        this.bouncer = "bounce";
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.override = new Blob();
        this.formData = new FormData();
        this.component = "ContactComponent";
        this.log.debug("[" + this.component + "] === page loaded");
    };
    /**
     * Resets all values to empty
     */
    ContactComponent.prototype.setMail = function () {
        this.mail.name = this.name;
        this.mail.email = this.email;
        this.mail.phone = this.phone;
        this.mail.subject = this.subject;
        this.mail.message = this.message;
        this.validMail = this.validate.validRequest(this.mail);
    };
    /**
     * Sets the objetct in the blob as form data
     * with name override
     * @param mail The email object to be sent
     */
    ContactComponent.prototype.setBlob = function (mail) {
        this.override = new Blob([
            JSON.stringify(mail)
        ], {
            type: 'application/json'
        });
        this.formData.append('override', this.override);
    };
    /**
     * Sends email using UserService only when
     * email inputs are valid
     */
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.setMail();
        this.reset();
        if (this.validMail) {
            this.isSpinning = true;
            this.setBlob(this.validMail);
            this.service.sendEmail(this.formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function () {
                _this.success = "Message Sent";
                _this.isSpinning = false;
                _this.log.debug("[" + _this.component + "] === message successfully sent");
            });
        }
        this.override = new Blob();
        this.formData = new FormData();
    };
    /**
     * Rests email form
     */
    ContactComponent.prototype.reset = function () {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.subject = "";
        this.message = "";
        this.success = "";
        this.invalid = "";
        this.log.debug("[" + this.component + "] === form reset");
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    ContactComponent.prototype.btnAnimate = function (state) {
        if (!this.button) {
            this.button = state;
        }
    };
    /**
     * Resets button animation
     */
    ContactComponent.prototype.btnReset = function () {
        this.button = "";
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    ContactComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] }
    ]; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => heartBeat', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["heartBeat"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => bounce', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["bounce"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.btn {\n  color: #212121;\n  background: linear-gradient(to bottom, #33b5e5, #0099CC);\n  border-radius: 50px;\n  margin: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcc3VmeWFcXERvY3VtZW50c1xcUmVwb3NpdG9yeVxcSW1nUmVjQXBwXFxKYXZhXFxBd3NJbWdSZWtKYXZhXFxJbWdSZWNBcHBcXHNyY1xcd2ViYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWM7RUFDZCx3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzNiNWU1LCAjMDA5OUNDKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var src_app_services_animation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/logging.service */ "./src/app/services/logging.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, log, memory, validate, animation) {
        this.service = service;
        this.log = log;
        this.memory = memory;
        this.validate = validate;
        this.animation = animation;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.role = "user";
        this.isSpinning = false;
        this.bouncer = "bounce";
        this.shaker = "shake";
        this.component = "HomeComponent";
        this.log.info("[" + this.component + "] === page loaded");
    };
    /**
     * Resets user hints
     */
    HomeComponent.prototype.reset = function () {
        this.success = "";
        this.message = "";
    };
    /**
     * Subscribes to backend API, retreives JWT tokens from the
     * Java backend as well as the C# backend, and stores tokens
     * in local storage.
     */
    HomeComponent.prototype.getAccess = function () {
        var _this = this;
        this.isSpinning = true;
        this.reset();
        this.user = {
            role: this.role
        };
        this.service.getAccess(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.memory.unsubscribe))
            .subscribe(function (data) {
            _this.success = "Access Granted";
            localStorage.setItem("cToken", data.cToken);
            localStorage.setItem("jToken", data.jToken);
            _this.isSpinning = false;
            _this.log.info("[" + _this.component + "] === access granted and JWT set in local storage");
            _this.updateLogs();
        }, function (error) {
            _this.message = "Internal error.. retry or contact me";
            _this.isSpinning = false;
            _this.log.info("[" + _this.component + "] === error either server is down or not running");
        });
    };
    /**
     * Execution wrapper for logging service post request
     */
    HomeComponent.prototype.updateLogs = function () {
        var _this = this;
        this.log.post()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.memory.unsubscribe))
            .subscribe(function () {
            _this.log.debug("[" + _this.component + "] === successfully updated frontend logs");
        }, function (error) {
            _this.log.debug("[" + _this.component + "] === error when updating frontend logs");
        });
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    HomeComponent.prototype.btnAnimate = function (state) {
        this.button = this.animation.btnAnimate(state);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] },
        { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"] },
        { type: src_app_services_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => heartBeat', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["heartBeat"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => bounce', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(650, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["bounce"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => zoom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["zoomIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => shake', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["shake"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => tada', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["tada"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["rotateIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => popup', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_6__["slideInUp"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"],
            src_app_services_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\n  color: green; }\n\n.invalid {\n  color: red; }\n\n.aws {\n  opacity: .7; }\n\n.dropZ {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 400px; }\n\n.selectFile {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.616);\n  border-radius: 7px;\n  border: 3px solid rgba(255, 255, 255, 0.616);\n  transition: all .2s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\ninput[type=\"file\"] {\n  display: none;\n  width: 400px;\n  height: 400px; }\n\n.l {\n  cursor: pointer; }\n\n.btn {\n  color: white;\n  background: linear-gradient(to bottom, #212121, #000000);\n  border-radius: 50px;\n  margin: 5%; }\n\n.redirect {\n  opacity: .6; }\n\n#dot-loader {\n  position: relative;\n  margin: 2rem auto;\n  width: 15rem; }\n\n#dot-loader div {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #CC0000;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-animation: slideDotLoader 1s infinite;\n          animation: slideDotLoader 1s infinite; }\n\n#dot-loader div:nth-child(1) {\n  -webkit-animation-delay: .1s;\n          animation-delay: .1s; }\n\n#dot-loader div:nth-child(2) {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; }\n\n#dot-loader div:nth-child(3) {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s; }\n\n#dot-loader div:nth-child(4) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n\n#dot-loader div:nth-child(5) {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n@-webkit-keyframes slideDotLoader {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes slideDotLoader {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvQzpcXFVzZXJzXFxzdWZ5YVxcRG9jdW1lbnRzXFxSZXBvc2l0b3J5XFxJbWdSZWNBcHBcXEphdmFcXEF3c0ltZ1Jla0phdmFcXEltZ1JlY0FwcFxcc3JjXFx3ZWJhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVwbG9hZFxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLHdCQUF3QjtFQUN4Qix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUlkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBRUksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2hCO0VBRUksYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw2Q0FBcUM7VUFBckMscUNBQXFDLEVBQUE7O0FBR3pDO0VBQThCLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFDbEQ7RUFBOEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUNsRDtFQUE4Qiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBQ2xEO0VBQThCLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFDbEQ7RUFBOEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUdsRDtFQUNJO0lBQUssMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ3hCO0lBQU0sV0FBVztJQUFFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUN0QztJQUFPLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBOztBQUg5QjtFQUNJO0lBQUssMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBQ3hCO0lBQU0sV0FBVztJQUFFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUN0QztJQUFPLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmludmFsaWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYXdze1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi5kcm9wWntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnNlbGVjdEZpbGV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxNik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5cclxuLmx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjEyMTIxLCAjMDAwMDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4vLyBEb3QgTG9hZGVyXHJcbi5yZWRpcmVjdHtcclxuICAgIG9wYWNpdHk6IC42O1xyXG59XHJcblxyXG4jZG90LWxvYWRlclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuI2RvdC1sb2FkZXIgZGl2XHJcbntcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNDQzAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBhbmltYXRpb246IHNsaWRlRG90TG9hZGVyIDFzIGluZmluaXRlO1xyXG59XHJcblxyXG4jZG90LWxvYWRlciBkaXY6bnRoLWNoaWxkKDEpeyBhbmltYXRpb24tZGVsYXk6IC4xczsgfVxyXG4jZG90LWxvYWRlciBkaXY6bnRoLWNoaWxkKDIpeyBhbmltYXRpb24tZGVsYXk6IC4yczsgfVxyXG4jZG90LWxvYWRlciBkaXY6bnRoLWNoaWxkKDMpeyBhbmltYXRpb24tZGVsYXk6IC4zczsgfVxyXG4jZG90LWxvYWRlciBkaXY6bnRoLWNoaWxkKDQpeyBhbmltYXRpb24tZGVsYXk6IC40czsgfVxyXG4jZG90LWxvYWRlciBkaXY6bnRoLWNoaWxkKDUpeyBhbmltYXRpb24tZGVsYXk6IC41czsgfVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVEb3RMb2FkZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgICA1MCUgeyBvcGFjaXR5OiAuMzsgdHJhbnNmb3JtOiBzY2FsZSgyKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxufVxyXG4vLyBFbmQgRG90IExvYWRlciJdfQ== */"

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
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/animation */ "./src/app/animations/animation.ts");
/* harmony import */ var _services_animation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/animation.service */ "./src/app/services/animation.service.ts");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/logging.service */ "./src/app/services/logging.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
    function UploadComponent(service, log, router, memory, validate, animation) {
        this.service = service;
        this.log = log;
        this.router = router;
        this.memory = memory;
        this.validate = validate;
        this.animation = animation;
        this.formData = new FormData();
        this.fileType = "data:image/png;base64,";
        /**
         * Attributes needed for the animations and transitions
         */
        this.button = "";
        this.bouncer = "bounce";
        this.zoomIn = "zoom";
        this.shaker = "shake";
        this.chart = "";
        this.cog = "";
        this.cloud = "";
        this.isSpinning = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.name = "";
        this.time = 10000;
        this.dotLoader = false;
        this.component = "UploadComponent";
    };
    /**
     * From UI files selected are set into the form data
     * object
     * @param files The file uploaded
     */
    UploadComponent.prototype.fileChange = function (files) {
        if (files && files.length > 0) {
            var file = files[0];
            this.formData.append('file', file);
        }
    };
    /**
     * News all elements, adds file name and form data, validates
     * name using ValidationService, sets spinner to true only if
     * file name is valid, subscribes to http post request using
     * UserService, sets all subscription data with its coresponding
     * elements and spinner is set to false. In case off error,
     * dot loader is set to true, local storage is cleared and the
     * UI is redirected to the home page based on the timer set number.
     */
    UploadComponent.prototype.uploadFiles = function () {
        var _this = this;
        this.display = "";
        this.image = "";
        this.results = "";
        this.valid = this.validate.validUpload(this.name);
        this.validFile = this.validate.validFile(this.formData);
        if (this.valid && this.validFile) {
            this.isSpinning = true;
            this.service.upload(this.valid, this.formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function (data) {
                _this.upload = data;
                _this.display = data.name;
                _this.results = data.process;
                _this.image = _this.fileType + data.image;
                _this.isSpinning = false;
                _this.log.info("[" + _this.component + "] === successfully processed upload");
            }, function (error) {
                _this.message = "Internal error.. retry or contact me";
                _this.isSpinning = false;
                _this.dotLoader = true;
                _this.log.info("[" + _this.component + "] === error either server not running or JWT token is expired");
                localStorage.clear();
                setTimeout(function () { return _this.router.navigate(['/home']); }, _this.time);
            });
            this.log.post()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.memory.unsubscribe))
                .subscribe(function () {
                _this.log.debug("[" + _this.component + "] === successfully updated frontend logs");
            }, function (error) {
                _this.log.debug("[" + _this.component + "] === error when updating frontend logs");
            });
        }
        if (!this.formData.get('file')) {
            this.alert = "Please choose a image to upload";
            this.log.info("[" + this.component + "] === user did not choose a image to upload");
        }
        else {
            this.alert = "";
        }
        if (!this.name) {
            this.message = "Please enter name for image";
            this.log.info("[" + this.component + "] === user did not enter a name");
        }
        else {
            this.message = "";
        }
        this.name = "";
        this.formData = new FormData();
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    UploadComponent.prototype.btnAnimate = function (state) {
        this.button = this.animation.btnAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    UploadComponent.prototype.chartAnimate = function (state) {
        this.chart = this.animation.chartAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    UploadComponent.prototype.cogAnimate = function (state) {
        this.cog = this.animation.cogAnimate(state);
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    UploadComponent.prototype.cloudAnimate = function (state) {
        this.cloud = this.animation.cloudAnimate(state);
    };
    UploadComponent.prototype.ngOnDestroy = function () {
        this.memory.unsubscribe.next();
        this.memory.unsubscribe.complete();
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] },
        { type: _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
        { type: _services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] },
        { type: _services_animation_service__WEBPACK_IMPORTED_MODULE_6__["AnimationService"] }
    ]; };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upload/upload.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('animator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => heartBeat', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => bounce', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(650, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["bounce"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => zoom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["zoomIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => shake', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["shake"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => tada', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["tada"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["rotateIn"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => popup', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_animations_animation__WEBPACK_IMPORTED_MODULE_5__["slideInUp"])))
                ])
            ],
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/components/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            _services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"],
            _services_animation_service__WEBPACK_IMPORTED_MODULE_6__["AnimationService"]])
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
/**
 * Email JSON holding message details
 */
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/services/animation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/animation.service.ts ***!
  \***********************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging.service */ "./src/app/services/logging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimationService = /** @class */ (function () {
    function AnimationService(log) {
        this.log = log;
        this.service = "AnimationService";
    }
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AnimationService.prototype.dashAnimate = function (state) {
        this.log.debug("[" + this.service + "] === dashAnimate envoked");
        if (state == "start") {
            return "pulse";
        }
        if (state == "stop") {
            return "";
        }
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AnimationService.prototype.btnAnimate = function (state) {
        this.log.debug("[" + this.service + "] === btnAnimate envoked");
        if (state == "start") {
            return "heartBeat";
        }
        if (state == "stop") {
            return "";
        }
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AnimationService.prototype.chartAnimate = function (state) {
        this.log.debug("[" + this.service + "] === chartAnimate envoked");
        if (state == "start") {
            return "tada";
        }
        if (state == "stop") {
            return "";
        }
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AnimationService.prototype.cogAnimate = function (state) {
        this.log.debug("[" + this.service + "] === cogAnimate envoked");
        if (state == "start") {
            return "rotate";
        }
        if (state == "stop") {
            return "";
        }
    };
    /**
     *
     * @param state Sets the state in animation using the AnimationService,
     * in this case either stop or start
     */
    AnimationService.prototype.cloudAnimate = function (state) {
        this.log.debug("[" + this.service + "] === cloudAnimate envoked");
        if (state == "start") {
            return "popup";
        }
        if (state == "stop") {
            return "";
        }
    };
    AnimationService.ctorParameters = function () { return [
        { type: _logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"] }
    ]; };
    AnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]])
    ], AnimationService);
    return AnimationService;
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
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logging.service */ "./src/app/services/logging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(log) {
        this.log = log;
        this.message = "";
        this.service = "HttpInterceptorService";
        this.username = "sfofana";
        this.password = "UofH2011";
        this.bearer = "Bearer ";
        this.cToken = "cToken";
        this.jToken = "jToken";
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        req = req.clone({
            setHeaders: {
                Authorization: 'Basic ' + btoa(this.username + ":" + this.password),
                cToken: this.bearer + localStorage.getItem(this.cToken),
                jToken: this.bearer + localStorage.getItem(this.jToken)
            }
        });
        this.log.info("[" + this.service + "] === http headers set");
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                _this.log.info("[" + _this.service + "] === Internal Error");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Internal Error');
            }
            else {
                _this.log.info("[" + _this.service + "] === Server Error");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Server Error');
            }
        }));
    };
    HttpInterceptorService.ctorParameters = function () { return [
        { type: _logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"] }
    ]; };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/logging.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/logging.service.ts ***!
  \*********************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggingService = /** @class */ (function () {
    function LoggingService(http) {
        this.http = http;
        this.logUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].logUrl;
    }
    /**
     * Sets log message to local storage
     * @param message The logged message
     */
    LoggingService.prototype.info = function (message) {
        var rawData = new Date();
        var date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(rawData, 'medium', 'en-us');
        var logs = localStorage.getItem('log');
        if (logs) {
            localStorage.setItem("log", logs + (date + " : " + message + " \n"));
        }
        else {
            localStorage.setItem("log", date + " : " + message + " \n");
        }
        console.log(date + " : " + message);
    };
    /**
     * Sets log to the console
     * @param message The logged message
     */
    LoggingService.prototype.debug = function (message) {
        var rawData = new Date();
        var date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(rawData, 'medium', 'en-us');
        console.log(date + " : " + message);
    };
    /**
     * Observable http post request, sends all existing logs
     * during front end session
     */
    LoggingService.prototype.post = function () {
        var logs = localStorage.getItem("log");
        var logging = {
            message: logs
        };
        localStorage.removeItem("log");
        return this.http.post(this.logUrl, logging);
    };
    LoggingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LoggingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoggingService);
    return LoggingService;
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
        /**
         * Used to watch subscriptions in place
         */
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
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging.service */ "./src/app/services/logging.service.ts");
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
    function UserService(http, log) {
        this.http = http;
        this.log = log;
        this.service = "UserService";
        this.sessionUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].session;
        this.eUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailUrl;
        this.compUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].compare;
        this.upUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].upload;
    }
    /**
     * Observable http post request, retrieves JWT tokens
     * and allows for access to full backend with tokens
     * @param user The user details to send
     */
    UserService.prototype.getAccess = function (user) {
        this.log.debug("[" + this.service + "] === getAccess envoked");
        return this.http.post(this.sessionUrl, user);
    };
    /**
     * Observable http post request, sends a request to
     * sfofana email service
     * @param message The messge details to send
     */
    UserService.prototype.sendEmail = function (message) {
        this.log.debug("[" + this.service + "] === sendEmail envoked");
        return this.http.post(this.eUrl, message);
    };
    /**
     * Observable http post request for uploading images
     * @param fileName The name of file
     * @param file The image to upload
     * @returns Results of file upload
     */
    UserService.prototype.upload = function (fileName, file) {
        this.log.debug("[" + this.service + "] === upload envoked");
        return this.http.post(this.upUrl + "/" + fileName, file);
    };
    /**
     * Observable http post request for comparing faces
     * @param faces The faces to compare
     * @returns Similarity results of faces compared
     */
    UserService.prototype.compareFaces = function (faces) {
        this.log.debug("[" + this.service + "] === compareFaces envoked");
        return this.http.post(this.compUrl, faces);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _logging_service__WEBPACK_IMPORTED_MODULE_3__["LoggingService"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logging_service__WEBPACK_IMPORTED_MODULE_3__["LoggingService"]])
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
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging.service */ "./src/app/services/logging.service.ts");
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
    function ValidationService(log) {
        this.log = log;
        this.service = "ValidationService";
    }
    /**
     *
     * @param message Email object to be validated
     * @returns Validated email object
     */
    ValidationService.prototype.validRequest = function (message) {
        var validMessage = null;
        if (!(message.name || message.email || message.phone || message.subject || message.message)) {
            validMessage = null;
            this.log.debug("[" + this.service + "] === user input invalid email details");
        }
        if (message.name && message.email && message.subject && message.message) {
            validMessage = message;
            this.log.debug("[" + this.service + "] === user input valid email details");
        }
        return validMessage;
    };
    /**
     *
     * @param faces Compare object to be validated
     * @returns Validated Compare object
     */
    ValidationService.prototype.validCompare = function (faces) {
        if (faces.names[0] && faces.names[1]) {
            this.log.debug("[" + this.service + "] === user input valid amount of names");
            return faces;
        }
        else {
            this.log.debug("[" + this.service + "] === user input invalid amount of names to faces");
            return null;
        }
    };
    /**
     *
     * @param name String to be validated
     * @returns Validate string
     */
    ValidationService.prototype.validUpload = function (name) {
        if (name) {
            this.log.debug("[" + this.service + "] === user input valid name");
            return name;
        }
        else {
            this.log.debug("[" + this.service + "] === user input invalid name");
            return null;
        }
    };
    /**
     *
     * @param file The file set in form data
     * @returns Validated file
     */
    ValidationService.prototype.validFile = function (file) {
        if (file.get('file')) {
            this.log.debug("[" + this.service + "] === user input valid file");
            return file;
        }
        else {
            this.log.debug("[" + this.service + "] === user input invalid file");
            return null;
        }
    };
    ValidationService.ctorParameters = function () { return [
        { type: _logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"] }
    ]; };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]])
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
    logUrl: 'http://3.17.152.168/api/v1/logging',
    session: 'http://3.17.152.168/api/v1/authenticate',
    upload: 'http://3.17.152.168/api/v1/upload',
    compare: 'http://3.17.152.168/api/v1/compare'
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