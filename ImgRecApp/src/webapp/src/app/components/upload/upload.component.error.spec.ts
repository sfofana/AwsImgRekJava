import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from '../upload/upload.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';
import { By } from '@angular/platform-browser';

describe('UploadComponent', () => {
  let malComponent: UploadComponent;
  let error: ComponentFixture<UploadComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    error = provider.errorFixtureBuilder(UploadComponent);
    malComponent = error.componentInstance;
    error.detectChanges();
  });

  it('should upload file with valid name', () => {
    expect(malComponent.uploadFiles()).toBeUndefined();
    const name = error.debugElement.query(By.css('input[id=name]')).nativeElement;
    name.value = "spec";
    name.dispatchEvent(new Event('input'));
    const file = ["C:/Users/sufya/Documents/Repository/ImgRecApp/Java/AwsImgRekJava/ImgRecApp/src/webapp/README.md"];
    malComponent.fileChange(file);
    malComponent.btnAnimate('start');
    error.detectChanges();
    expect(malComponent.uploadFiles()).toBeUndefined();
  });
});