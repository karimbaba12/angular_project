import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTComponent } from './test.component';

describe('TESTComponent', () => {
  let component: TESTComponent;
  let fixture: ComponentFixture<TESTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TESTComponent],
    });
    fixture = TestBed.createComponent(TESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
