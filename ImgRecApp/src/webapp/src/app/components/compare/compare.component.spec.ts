import { ComponentFixture } from '@angular/core/testing';

import { CompareComponent } from '../compare/compare.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';
import { By } from '@angular/platform-browser';

describe('CompareComponent', () => {
  let component: CompareComponent;
  let malComponent: CompareComponent;
  let fixture: ComponentFixture<CompareComponent>;
  let error: ComponentFixture<CompareComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider();
    fixture = provider.compareComponentBuilder();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Tests for all animations
   */
  it('should call all animation functions', () => {
    expect(component.compareFaces()).toBeUndefined();
    const img1 = fixture.debugElement.query(By.css('input[id=img1]')).nativeElement;
    const img2 = fixture.debugElement.query(By.css('input[id=img2]')).nativeElement;
    img1.value = "test";
    img2.value = "test";
    img1.dispatchEvent(new Event('input'));
    img2.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.chartAnimate('start')).toBeUndefined();
    expect(component.cogAnimate('start')).toBeUndefined();
    expect(component.cloudAnimate('start')).toBeUndefined();
    expect(component.compareFaces()).toBeUndefined();
  });

});