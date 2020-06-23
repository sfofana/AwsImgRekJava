import { TestBed } from '@angular/core/testing';

import { LoggingService } from './logging.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Logging } from '../models/logging';
import { environment } from 'src/environments/environment';
import { TestBedProvider } from '../specs/testbed-provider';

describe('LoggingService', () => {
  let mockService: LoggingService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    mockService = provider.serviceTestBed(LoggingService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should post to logging service', () => {
    const mockLog: Logging ={
      message: "stub"
    };   
    mockService.post().subscribe(data => {
      expect(data).toBe(mockLog);
    });

    const request = mockHttp.expectOne(`${environment.logUrl}`); 
    expect(request.request.method).toBe('POST');
    request.flush(mockLog);
  });

  it('should log to local storage', () => {
    expect(mockService.info(`[LoggingServiceTest] === mock data for testing`)).toBeUndefined();
  });

  it('should log to console', () => {
    expect(mockService.debug(`[LoggingServiceTest] === mock data for testing`)).toBeUndefined();
  });
});
