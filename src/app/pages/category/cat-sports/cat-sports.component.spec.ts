import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSportsComponent } from './cat-sports.component';

describe('CatSportsComponent', () => {
  let component: CatSportsComponent;
  let fixture: ComponentFixture<CatSportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatSportsComponent]
    });
    fixture = TestBed.createComponent(CatSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
