import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOneComponent } from './main-one.component';

describe('MainOneComponent', () => {
  let component: MainOneComponent;
  let fixture: ComponentFixture<MainOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
