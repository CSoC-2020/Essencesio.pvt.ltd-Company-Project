import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLoginMobileComponent } from './email-login-mobile.component';

describe('EmailLoginMobileComponent', () => {
  let component: EmailLoginMobileComponent;
  let fixture: ComponentFixture<EmailLoginMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailLoginMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLoginMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
