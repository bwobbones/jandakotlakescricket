import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MinutesComponent } from './minutes.component';

describe('MinutesComponent', () => {
  let component: MinutesComponent;
  let fixture: ComponentFixture<MinutesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
