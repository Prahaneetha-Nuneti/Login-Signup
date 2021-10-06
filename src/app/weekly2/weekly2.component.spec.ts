import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weekly2Component } from './weekly2.component';

describe('Weekly2Component', () => {
  let component: Weekly2Component;
  let fixture: ComponentFixture<Weekly2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weekly2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Weekly2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
