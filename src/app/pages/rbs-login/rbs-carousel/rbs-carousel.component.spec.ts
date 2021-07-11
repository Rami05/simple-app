import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbsCarouselComponent } from './rbs-carousel.component';

describe('RbsCarouselComponent', () => {
  let component: RbsCarouselComponent;
  let fixture: ComponentFixture<RbsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
