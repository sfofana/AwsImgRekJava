import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule,  TooltipModule, PopoverModule } from 'angular-bootstrap-md';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { UserService } from './services/user.service';
import { ValidationService } from './services/validation.service';
import { SubjectService } from './services/subject.service';
import { UploadComponent } from './components/upload/upload.component';
import { CompareComponent } from './components/compare/compare.component';
import { HttpInterceptorService } from './services/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    UploadComponent,
    CompareComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsModule,
    ModalModule
  ],
  providers: [
    UserService,
    ValidationService,
    SubjectService,
    {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
