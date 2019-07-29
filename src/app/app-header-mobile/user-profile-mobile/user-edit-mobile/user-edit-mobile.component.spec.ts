import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditMobileComponent } from './user-edit-mobile.component';

describe('UserEditMobileComponent', () => {
  let component: UserEditMobileComponent;
  let fixture: ComponentFixture<UserEditMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
