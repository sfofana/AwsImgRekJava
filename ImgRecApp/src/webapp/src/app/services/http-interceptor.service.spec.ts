import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { UserService } from './user.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { User } from '../models/user';

describe('HttpInterceptorService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        UserService,
        {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
      ]
    });
    service = TestBed.get(UserService);
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
