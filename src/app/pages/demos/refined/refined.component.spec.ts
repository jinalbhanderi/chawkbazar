import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinedComponent } from './refined.component';

describe('RefinedComponent', () => {
  let component: RefinedComponent;
  let fixture: ComponentFixture<RefinedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefinedComponent]
    });
    fixture = TestBed.createComponent(RefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
