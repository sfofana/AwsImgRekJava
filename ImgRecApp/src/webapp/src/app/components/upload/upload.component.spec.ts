import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from '../upload/upload.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';
import { By } from '@angular/platform-browser';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    fixture = provider.fixtureBuilder(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should upload file with valid name', () => {
    expect(component.uploadFiles()).toBeUndefined();
    const name = fixture.debugElement.query(By.css('input[id=name]')).nativeElement;
    name.value = "spec";
    name.dispatchEvent(new Event('input'));
    const file = ["C:/Users/sufya/Documents/Repository/ImgRecApp/Java/AwsImgRekJava/ImgRecApp/src/webapp/README.md"];
    component.fileChange(file);
    component.btnAnimate('start');
    fixture.detectChanges();
    expect(component.uploadFiles()).toBeUndefined();
  });
});