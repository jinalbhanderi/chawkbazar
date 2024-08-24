import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBagsComponent } from './cat-bags.component';

describe('CatBagsComponent', () => {
  let component: CatBagsComponent;
  let fixture: ComponentFixture<CatBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBagsComponent]
    });
    fixture = TestBed.createComponent(CatBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
