import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyHivesComponent } from './honey-hives.component';

describe('HoneyHivesComponent', () => {
  let component: HoneyHivesComponent;
  let fixture: ComponentFixture<HoneyHivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneyHivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyHivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
