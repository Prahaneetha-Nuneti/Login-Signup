import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoborderComponent } from './logoborder.component';

describe('LogoborderComponent', () => {
  let component: LogoborderComponent;
  let fixture: ComponentFixture<LogoborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoborderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
