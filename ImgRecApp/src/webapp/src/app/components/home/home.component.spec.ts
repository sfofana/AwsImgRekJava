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
import { Compare } from 'src/app/models/compare';
import { Observable, of } from 'rxjs';
import { Upload } from 'src/app/models/upload';
import { Email } from 'src/app/models/email';
import { User } from 'src/app/models/user';
import { TestBedProvider } from 'src/app/specs/testbed-provider';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    fixture = provider.fixtureBuilder(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should grant access for application', () => {
    expect(component.getAccess()).toBeUndefined();
  });

  it('should post logs', () => {
    expect(component.updateLogs()).toBeUndefined();
  });

});