import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProperty2Component } from './input-property2.component';

describe('InputProperty2Component', () => {
  let component: InputProperty2Component;
  let fixture: ComponentFixture<InputProperty2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputProperty2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProperty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
