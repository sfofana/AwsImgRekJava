import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { UserService } from './user.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { User } from '../models/user';
import { LoggingService } from './logging.service';
import { TestBedProvider } from '../specs/testbed-provider';

describe('HttpInterceptorService', () => {
  let service: UserService;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    service = provider.serviceTestBed(UserService);
  });

  it('should intercept error', () => {
    const user: User = {
      role: "spec",
      cToken: "cToken",
      jToken: "jToken"
    };
    
    service.getAccess(user).subscribe(data => console.log('no error'), error => {
      expect(error).toBeTruthy();
    });
  });
});
