import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbsFormComponent } from './rbs-form.component';

describe('RbsFormComponent', () => {
  let component: RbsFormComponent;
  let fixture: ComponentFixture<RbsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
