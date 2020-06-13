import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationService } from 'src/app/services/animation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { UserService } from 'src/app/services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, CardsModule, ModalModule } from 'projects/angular-bootstrap-md/src/public_api';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from '../compare/compare.component';
import { HomeComponent } from '../home/home.component';
import { UploadComponent } from '../upload/upload.component';
import { ContactComponent } from '../contact/contact.component';
import { of, Observable } from 'rxjs';
import { Compare } from 'src/app/models/compare';
import { Upload } from 'src/app/models/upload';
import { Email } from 'src/app/models/email';
import { User } from 'src/app/models/user';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(() => {
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
        ValidationService,
        SubjectService,
        AnimationService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should upload file with valid name', () => {
    expect(component.uploadFiles()).toBeUndefined();
    const name = fixture.debugElement.query(By.css('input[id=name]')).nativeElement;
    name.value = "spec";
    name.dispatchEvent(new Event('input'));
    const file = ["C:/Users/sufya/Documents/Repository/ImgRecApp/Java/AwsImgRekJava/ImgRecApp/src/webapp/README.md"];
    component.fileChange(file);
    component.btnAnimate('start');
    fixture.detectChanges();
    expect(component.uploadFiles()).toBeUndefined();
  });
});

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