import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantComponent } from './elegant.component';

describe('ElegantComponent', () => {
  let component: ElegantComponent;
  let fixture: ComponentFixture<ElegantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElegantComponent]
    });
    fixture = TestBed.createComponent(ElegantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
