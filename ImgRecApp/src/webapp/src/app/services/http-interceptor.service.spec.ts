import { HttpInterceptorService } from './http-interceptor.service';
import { HttpRequest } from '@angular/common/http';
import { TestBedProvider } from '../specs/testbed-provider';
import { throwError } from 'rxjs';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    service = provider.serviceTestBed(HttpInterceptorService);
  });

  it('should intercept error', () => {
    let httpRequest: HttpRequest<any> = new HttpRequest<any>('GET',"https://www.google.com/");
    let httpHandlerSpy: any;
    const error = {status: 401, statusText: 'error'};

    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.returnValue(throwError(
        {error: 
            {message: 'test-error'}
        }
    ));
    
    service.intercept(httpRequest, httpHandlerSpy)
    .subscribe(data => console.log('no error'), 
      error => expect(error).toEqual('Server Error')
  );

  });

});
