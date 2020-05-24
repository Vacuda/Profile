import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinMachineComponent } from './coin-machine.component';

describe('CoinMachineComponent', () => {
  let component: CoinMachineComponent;
  let fixture: ComponentFixture<CoinMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
