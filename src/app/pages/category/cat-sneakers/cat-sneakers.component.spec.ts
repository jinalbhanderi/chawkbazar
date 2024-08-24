import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSneakersComponent } from './cat-sneakers.component';

describe('CatSneakersComponent', () => {
  let component: CatSneakersComponent;
  let fixture: ComponentFixture<CatSneakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatSneakersComponent]
    });
    fixture = TestBed.createComponent(CatSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
