import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbsLoginComponent } from './rbs-login.component';

describe('RbsLoginComponent', () => {
  let component: RbsLoginComponent;
  let fixture: ComponentFixture<RbsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
