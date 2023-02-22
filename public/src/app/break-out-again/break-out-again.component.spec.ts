import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakOutAgainComponent } from './break-out-again.component';

describe('BreakOutAgainComponent', () => {
  let component: BreakOutAgainComponent;
  let fixture: ComponentFixture<BreakOutAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakOutAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakOutAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
