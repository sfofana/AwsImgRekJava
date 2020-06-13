import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
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
import { Compare } from 'src/app/models/compare';
import { of, Observable } from 'rxjs';
import { Upload } from 'src/app/models/upload';
import { User } from 'src/app/models/user';
import { Email } from 'src/app/models/email';
import { TestBedProvider } from 'src/app/specs/testbed-provider'

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.contactFixtureBuilder();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send email only if it is valid', () => {
    expect(component.submit()).toBeUndefined();
    const name = fixture.debugElement.query(By.css('input[id=name]')).nativeElement;
    const email = fixture.debugElement.query(By.css('input[id=email]')).nativeElement;
    const phone = fixture.debugElement.query(By.css('input[id=phone]')).nativeElement;
    const subject = fixture.debugElement.query(By.css('input[id=subject]')).nativeElement;
    const message = fixture.debugElement.query(By.css('textarea[id=message]')).nativeElement;


    name.value = "Spec";
    email.value = "test@gmail.com";
    phone.value = "12223333145";
    subject.value = "Angular Test";
    message.value = "Test from Angular using Jasmine";

    name.dispatchEvent(new Event('input'));
    email.dispatchEvent(new Event('input'));
    phone.dispatchEvent(new Event('input'));
    subject.dispatchEvent(new Event('input'));
    message.dispatchEvent(new Event('textarea'));

    component.setBlob({
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    });
    component.btnAnimate('heartBeat');
    fixture.detectChanges();
    expect(component.submit()).toBeUndefined();
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