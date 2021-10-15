import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancestatusComponent } from './attendancestatus.component';

describe('AttendancestatusComponent', () => {
  let component: AttendancestatusComponent;
  let fixture: ComponentFixture<AttendancestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
