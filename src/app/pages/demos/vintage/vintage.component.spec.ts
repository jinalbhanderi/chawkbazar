import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageComponent } from './vintage.component';

describe('VintageComponent', () => {
  let component: VintageComponent;
  let fixture: ComponentFixture<VintageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VintageComponent]
    });
    fixture = TestBed.createComponent(VintageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
