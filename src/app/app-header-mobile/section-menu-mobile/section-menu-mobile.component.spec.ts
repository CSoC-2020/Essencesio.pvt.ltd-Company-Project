import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMenuMobileComponent } from './section-menu-mobile.component';

describe('SectionMenuMobileComponent', () => {
  let component: SectionMenuMobileComponent;
  let fixture: ComponentFixture<SectionMenuMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMenuMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
