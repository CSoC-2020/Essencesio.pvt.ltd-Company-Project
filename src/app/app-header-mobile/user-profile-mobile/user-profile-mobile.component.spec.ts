import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileMobileComponent } from './user-profile-mobile.component';

describe('UserProfileMobileComponent', () => {
  let component: UserProfileMobileComponent;
  let fixture: ComponentFixture<UserProfileMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
