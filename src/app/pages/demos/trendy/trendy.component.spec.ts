import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyComponent } from './trendy.component';

describe('TrendyComponent', () => {
  let component: TrendyComponent;
  let fixture: ComponentFixture<TrendyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendyComponent]
    });
    fixture = TestBed.createComponent(TrendyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
