import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMobileComponent } from './blog-mobile.component';

describe('BlogMobileComponent', () => {
  let component: BlogMobileComponent;
  let fixture: ComponentFixture<BlogMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
