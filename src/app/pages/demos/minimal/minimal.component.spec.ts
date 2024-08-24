import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalComponent } from './minimal.component';

describe('MinimalComponent', () => {
  let component: MinimalComponent;
  let fixture: ComponentFixture<MinimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimalComponent]
    });
    fixture = TestBed.createComponent(MinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
