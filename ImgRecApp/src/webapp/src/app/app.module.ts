import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, CardsModule, ModalModule } from 'angular-bootstrap-md';
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
import { AnimationService } from './services/animation.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    UploadComponent,
    CompareComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    AnimationService,
    {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
