import { ComponentFixture } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';
import { TestBedProvider } from 'src/app/specs/testbed-provider'

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.fixtureBuilder(ContactComponent);
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

    component.btnAnimate('start');
    fixture.detectChanges();
    expect(component.submit()).toBeUndefined();
  });

});
