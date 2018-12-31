import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWordpressComponent } from './ng-wordpress.component';

describe('NgWordpressComponent', () => {
  let component: NgWordpressComponent;
  let fixture: ComponentFixture<NgWordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
