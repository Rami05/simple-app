import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbsDashboaedComponent } from './rbs-dashboaed.component';

describe('RbsDashboaedComponent', () => {
  let component: RbsDashboaedComponent;
  let fixture: ComponentFixture<RbsDashboaedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbsDashboaedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbsDashboaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
