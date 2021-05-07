import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterLionHeartComponent } from './cater-lion-heart.component';

describe('CaterLionHeartComponent', () => {
  let component: CaterLionHeartComponent;
  let fixture: ComponentFixture<CaterLionHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterLionHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterLionHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
