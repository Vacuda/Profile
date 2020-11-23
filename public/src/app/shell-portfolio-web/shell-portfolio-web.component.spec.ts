import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPortfolioWebComponent } from './shell-portfolio-web.component';

describe('ShellPortfolioWebComponent', () => {
  let component: ShellPortfolioWebComponent;
  let fixture: ComponentFixture<ShellPortfolioWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPortfolioWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPortfolioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
