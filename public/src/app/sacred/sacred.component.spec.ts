import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacredComponent } from './sacred.component';

describe('SacredComponent', () => {
  let component: SacredComponent;
  let fixture: ComponentFixture<SacredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
