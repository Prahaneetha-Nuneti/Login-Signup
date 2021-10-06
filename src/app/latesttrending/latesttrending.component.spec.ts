import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesttrendingComponent } from './latesttrending.component';

describe('LatesttrendingComponent', () => {
  let component: LatesttrendingComponent;
  let fixture: ComponentFixture<LatesttrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatesttrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesttrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
