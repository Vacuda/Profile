import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTalismansWebComponent } from './shell-talismans-web.component';

describe('ShellTalismansWebComponent', () => {
  let component: ShellTalismansWebComponent;
  let fixture: ComponentFixture<ShellTalismansWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellTalismansWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellTalismansWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
