import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPortfolioIronGalaxyComponent } from './shell-portfolio-iron-galaxy.component';

describe('ShellPortfolioIronGalaxyComponent', () => {
  let component: ShellPortfolioIronGalaxyComponent;
  let fixture: ComponentFixture<ShellPortfolioIronGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPortfolioIronGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPortfolioIronGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
