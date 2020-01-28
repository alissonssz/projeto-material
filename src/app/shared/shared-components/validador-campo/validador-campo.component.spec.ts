import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorCampoComponent } from './validador-campo.component';

describe('ValidadorCampoComponent', () => {
  let component: ValidadorCampoComponent;
  let fixture: ComponentFixture<ValidadorCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidadorCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidadorCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
