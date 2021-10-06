import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopborderComponent } from './topborder.component';

describe('TopborderComponent', () => {
  let component: TopborderComponent;
  let fixture: ComponentFixture<TopborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopborderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
