import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { LoggingService } from './logging.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Email } from '../models/email';
import { TestBedProvider } from '../specs/testbed-provider';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    service = provider.serviceTestBed(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify email details', () => {
    const message: Email ={
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    };

    expect(service.validRequest(message)).toBeTruthy();
  });

  it('should verify formdata is not empty', () => {
    expect(service.validUpload(null)).toBeFalsy();
  });
});
