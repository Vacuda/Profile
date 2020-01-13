import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjamanComponent } from './ninjaman.component';

describe('NinjamanComponent', () => {
  let component: NinjamanComponent;
  let fixture: ComponentFixture<NinjamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
