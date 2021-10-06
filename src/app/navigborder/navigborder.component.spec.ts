import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigborderComponent } from './navigborder.component';

describe('NavigborderComponent', () => {
  let component: NavigborderComponent;
  let fixture: ComponentFixture<NavigborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigborderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
