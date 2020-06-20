import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { TestBedProvider } from 'src/app/specs/testbed-provider'

describe('ContactComponent', () => {
  let malComponent: ContactComponent;
  let error: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    error = provider.contactErrorComponentBuilder();
    malComponent = error.componentInstance;
    error.detectChanges();
  });

  it('should create', () => {
    expect(malComponent).toBeTruthy();
  });

  it('should send email only if it is valid', () => {
    const name = error.debugElement.query(By.css('input[id=name]')).nativeElement;
    const email = error.debugElement.query(By.css('input[id=email]')).nativeElement;
    const phone = error.debugElement.query(By.css('input[id=phone]')).nativeElement;
    const subject = error.debugElement.query(By.css('input[id=subject]')).nativeElement;
    const message = error.debugElement.query(By.css('textarea[id=message]')).nativeElement;

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

    malComponent.setBlob({
      name: "spec",
      email: "email",
      phone: "num",
      subject: "subj",
      message: "stub"
    });
    error.detectChanges();
    expect(malComponent.submit()).toBeUndefined();
  });

});
