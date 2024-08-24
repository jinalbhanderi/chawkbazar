import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWomenComponent } from './cat-women.component';

describe('CatWomenComponent', () => {
  let component: CatWomenComponent;
  let fixture: ComponentFixture<CatWomenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatWomenComponent]
    });
    fixture = TestBed.createComponent(CatWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
