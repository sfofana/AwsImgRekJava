import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Upload } from '../models/upload';
import { Email } from '../models/email';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Compare } from '../models/compare';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { LoggingService } from './logging.service';
import { TestBedProvider } from '../specs/testbed-provider';

describe('UserService', () => {
  let mockService: UserService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    mockService = provider.serviceTestBed(UserService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be return http requests', () => {
    const mockUser: User = {
        role: "spec",
        cToken: "cToken",
        jToken: "jToken"
      };
     
    mockService.getAccess(mockUser).subscribe(data => {
      expect(data).toBe(mockUser);
    });

    const request = mockHttp.expectOne(`${environment.session}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockUser);
  });

  it('Should return http post method from email service', () => {
    const mockEmail: Email ={
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    };   
    const message: FormData = new FormData; 
    mockService.sendEmail(message).subscribe(data => {
      expect(data).toBe(mockEmail);
    });

    const request = mockHttp.expectOne(`${environment.emailUrl}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockEmail);
  });

  it('Should return http post method from upload api', () => {
    const mockUpload: Upload = {
      name: "spec",
      process: "success",
      image: "image"
    };  
    const fileName: string = "spec";
    const file: FormData = new FormData();
    mockService.upload(fileName, file).subscribe(data => {
      expect(data).toBe(mockUpload);
    });

    const request = mockHttp.expectOne(`${environment.upload}/${fileName}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockUpload);
  });

  it('Should return http post method from compare api', () => {
    const mockCompare: Compare = {
      names: ["spec","test"],
      images: ["image1","image2"],
      details: ["detail1","detail2"],
      results: 50
    };
    
    mockService.compareFaces(mockCompare).subscribe(data => {
      expect(data).toBe(mockCompare);
    });

    const request = mockHttp.expectOne(`${environment.compare}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockCompare);
  });

});
