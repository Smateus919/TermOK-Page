import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOrderComponent } from './result-order.component';

describe('ResultOrderComponent', () => {
  let component: ResultOrderComponent;
  let fixture: ComponentFixture<ResultOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
