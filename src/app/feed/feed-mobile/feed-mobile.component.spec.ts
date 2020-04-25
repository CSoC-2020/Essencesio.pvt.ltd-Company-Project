import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMobileComponent } from './feed-mobile.component';

describe('FeedMobileComponent', () => {
  let component: FeedMobileComponent;
  let fixture: ComponentFixture<FeedMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
