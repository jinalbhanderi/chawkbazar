import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShposComponent } from './shpos.component';

describe('ShposComponent', () => {
  let component: ShposComponent;
  let fixture: ComponentFixture<ShposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShposComponent]
    });
    fixture = TestBed.createComponent(ShposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
