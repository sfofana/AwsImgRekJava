import { ComponentFixture } from '@angular/core/testing';

import { CompareComponent } from '../compare/compare.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';
import { By } from '@angular/platform-browser';

describe('CompareComponent', () => {
  let malComponent: CompareComponent;
  let error: ComponentFixture<CompareComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    error = provider.compareErrorComponentBuilder();
    malComponent = error.componentInstance;
    error.detectChanges();
  });

  /**
   * Tests for all animations
   */
  it('should catch error when subscribing to service', () => {
    expect(malComponent.compareFaces()).toBeUndefined();
    const img1 = error.debugElement.query(By.css('input[id=img1]')).nativeElement;
    const img2 = error.debugElement.query(By.css('input[id=img2]')).nativeElement;
    img1.value = "test";
    img2.value = "test";
    img1.dispatchEvent(new Event('input'));
    img2.dispatchEvent(new Event('input'));
    error.detectChanges();
    expect(malComponent.compareFaces()).toBeUndefined();
  });

});