import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootborderComponent } from './footborder.component';

describe('FootborderComponent', () => {
  let component: FootborderComponent;
  let fixture: ComponentFixture<FootborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootborderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
