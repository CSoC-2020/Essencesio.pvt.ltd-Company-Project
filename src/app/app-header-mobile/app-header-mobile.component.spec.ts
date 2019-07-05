import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderMobileComponent } from './app-header-mobile.component';

describe('AppHeaderMobileComponent', () => {
  let component: AppHeaderMobileComponent;
  let fixture: ComponentFixture<AppHeaderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
