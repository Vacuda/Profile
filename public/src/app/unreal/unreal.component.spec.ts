import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrealComponent } from './unreal.component';

describe('UnrealComponent', () => {
  let component: UnrealComponent;
  let fixture: ComponentFixture<UnrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
