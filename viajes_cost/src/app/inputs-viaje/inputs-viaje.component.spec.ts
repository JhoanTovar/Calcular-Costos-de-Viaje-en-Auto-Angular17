import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsViajeComponent } from './inputs-viaje.component';

describe('InputsViajeComponent', () => {
  let component: InputsViajeComponent;
  let fixture: ComponentFixture<InputsViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
