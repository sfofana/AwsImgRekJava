import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { UploadComponent } from './components/upload/upload.component';
import { CompareComponent } from './components/compare/compare.component';
import { HomeComponent } from './components/home/home.component';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { Email } from './models/email';
import { Upload } from './models/upload';
import { Compare } from './models/compare';
import { TestBedProvider } from './specs/testbed-provider';

describe('AppComponent', () => { 
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    fixture = provider.appFixtureBuilder();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component.compAnimate('start')).toBeUndefined();

    expect(component).toBeTruthy();
  });
});

