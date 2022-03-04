import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPruebaComponent } from './step-prueba.component';

describe('StepPruebaComponent', () => {
  let component: StepPruebaComponent;
  let fixture: ComponentFixture<StepPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
