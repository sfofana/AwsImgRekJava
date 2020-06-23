import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AnimationService } from 'src/app/services/animation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UserService } from 'src/app/services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, CardsModule, ModalModule } from 'projects/angular-bootstrap-md/src/public_api';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { Compare } from 'src/app/models/compare';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { UploadComponent } from '../components/upload/upload.component';
import { CompareComponent } from '../components/compare/compare.component';
import { HomeComponent } from '../components/home/home.component';
import { Observable, of, throwError } from 'rxjs';
import { Upload } from '../models/upload';
import { Email } from '../models/email';
import { User } from '../models/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggingService } from '../services/logging.service';
import { Logging } from '../models/logging';
import { Type } from '@angular/core';

export class TestBedProvider{

  public fixtureBuilder<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
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
          {provide: UserService, useClass: UserServiceStub},
          {provide: LoggingService, useClass: LoggingServiceStub},
          ValidationService,
          SubjectService,
          AnimationService,
          {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
        ]
      }).compileComponents();
      const fixture = TestBed.createComponent(component);
      return fixture;
  }

  public errorFixtureBuilder<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
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
          {provide: UserService, useClass: UserServiceErrorStub},
          {provide: LoggingService, useClass: LoggingServiceErrorStub},
          ValidationService,
          SubjectService,
          AnimationService,
          {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
        ]
      }).compileComponents();
      const fixture = TestBed.createComponent(component);
      return fixture;
  }
  
  public serviceTestBed<T>(service: Type<T>): T {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        LoggingService,
        ValidationService,
        SubjectService,
        AnimationService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
    });
    const bed: T = TestBed.get(service)
    return bed;
  }

}

class UserServiceStub {
    
    public getAccess(user: User): Observable<User> {
      return of({
        role: "spec",
        cToken: "cToken",
        jToken: "jToken"
      });
    }
   
    public sendEmail(message: FormData): Observable<Email>{
      return of({
        name: "spec",
        email: "email",
        phone: "num",
        subject: "subj",
        message: "stub"
      });
    }
   
    public upload(fileName: string, file: FormData): Observable<Upload>{
      return of({
        name: "spec",
        process: "success",
        image: "image"
      });
    }
   
    public compareFaces(faces: Compare) : Observable<Compare> {
      return of({
        names: ["spec","test"],
        images: ["image1","image2"],
        details: ["detail1","detail2"],
        results: 50
      });
    }
  }

class UserServiceErrorStub {
  
  public getAccess(user: User): Observable<User> {
    return throwError("Method not implemented.");
  }
  
  public sendEmail(message: FormData): Observable<Email>{
    return throwError("Method not implemented.");
  }
  
  public upload(fileName: string, file: FormData): Observable<Upload>{
    return throwError("Method not implemented.");
  }
  
  public compareFaces(faces: Compare) : Observable<Compare> {
    return throwError("Method not implemented.");
  }
}

class LoggingServiceStub {
  
  public info(message: string): void { }

  public debug(message: string): void { }

  public post(): Observable<Logging> {    
    return of({
      message: "message stub"
    });
  }
}

class LoggingServiceErrorStub {

  public info(message: string): void { }

  public debug(message: string): void { }

  public post(): Observable<Logging> {    
    return throwError("Method not implemented.");
  }
}