import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewSubscriptionComponent } from './user-view-subscription.component';

describe('UserViewSubscriptionComponent', () => {
  let component: UserViewSubscriptionComponent;
  let fixture: ComponentFixture<UserViewSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
