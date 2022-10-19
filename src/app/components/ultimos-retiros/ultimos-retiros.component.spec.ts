import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosRetirosComponent } from './ultimos-retiros.component';

describe('UltimosRetirosComponent', () => {
  let component: UltimosRetirosComponent;
  let fixture: ComponentFixture<UltimosRetirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosRetirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimosRetirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
