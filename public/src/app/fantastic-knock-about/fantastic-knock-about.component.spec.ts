import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticKnockAboutComponent } from './fantastic-knock-about.component';

describe('FantasticKnockAboutComponent', () => {
  let component: FantasticKnockAboutComponent;
  let fixture: ComponentFixture<FantasticKnockAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasticKnockAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasticKnockAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
