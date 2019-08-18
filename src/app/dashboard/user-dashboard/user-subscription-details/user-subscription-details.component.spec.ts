import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscriptionDetailsComponent } from './user-subscription-details.component';

describe('UserSubscriptionDetailsComponent', () => {
  let component: UserSubscriptionDetailsComponent;
  let fixture: ComponentFixture<UserSubscriptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubscriptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubscriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
