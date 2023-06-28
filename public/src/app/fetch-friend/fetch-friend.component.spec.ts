import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFriendComponent } from './fetch-friend.component';

describe('FetchFriendComponent', () => {
  let component: FetchFriendComponent;
  let fixture: ComponentFixture<FetchFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
