import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEngineerComponent } from './admin-add-engineer.component';

describe('AdminAddEngineerComponent', () => {
  let component: AdminAddEngineerComponent;
  let fixture: ComponentFixture<AdminAddEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
