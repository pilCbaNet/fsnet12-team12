import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosOfrecidosComponent } from './servicios-ofrecidos.component';

describe('ServiciosOfrecidosComponent', () => {
  let component: ServiciosOfrecidosComponent;
  let fixture: ComponentFixture<ServiciosOfrecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosOfrecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosOfrecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
