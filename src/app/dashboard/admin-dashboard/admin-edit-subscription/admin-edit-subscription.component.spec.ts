import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSubscriptionComponent } from './admin-edit-subscription.component';

describe('AdminEditSubscriptionComponent', () => {
  let component: AdminEditSubscriptionComponent;
  let fixture: ComponentFixture<AdminEditSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
