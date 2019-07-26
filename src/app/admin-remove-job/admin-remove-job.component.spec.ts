import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemoveJobComponent } from './admin-remove-job.component';

describe('AdminRemoveJobComponent', () => {
  let component: AdminRemoveJobComponent;
  let fixture: ComponentFixture<AdminRemoveJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRemoveJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
