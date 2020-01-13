import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostilityComponent } from './hostility.component';

describe('HostilityComponent', () => {
  let component: HostilityComponent;
  let fixture: ComponentFixture<HostilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
