import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityInclusionComponent } from './accessibility-inclusion.component';

describe('AccessibilityInclusionComponent', () => {
  let component: AccessibilityInclusionComponent;
  let fixture: ComponentFixture<AccessibilityInclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityInclusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
