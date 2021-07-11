import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbsHeaderComponent } from './rbs-header.component';

describe('RbsHeaderComponent', () => {
  let component: RbsHeaderComponent;
  let fixture: ComponentFixture<RbsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
