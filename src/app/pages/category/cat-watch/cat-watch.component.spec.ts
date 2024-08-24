import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWatchComponent } from './cat-watch.component';

describe('CatWatchComponent', () => {
  let component: CatWatchComponent;
  let fixture: ComponentFixture<CatWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatWatchComponent]
    });
    fixture = TestBed.createComponent(CatWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
