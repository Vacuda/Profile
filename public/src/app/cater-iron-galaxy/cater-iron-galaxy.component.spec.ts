import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterIronGalaxyComponent } from './cater-iron-galaxy.component';

describe('CaterIronGalaxyComponent', () => {
  let component: CaterIronGalaxyComponent;
  let fixture: ComponentFixture<CaterIronGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterIronGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterIronGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
