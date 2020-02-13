import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPortfolioComponent } from './shell-portfolio.component';

describe('ShellPortfolioComponent', () => {
  let component: ShellPortfolioComponent;
  let fixture: ComponentFixture<ShellPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
