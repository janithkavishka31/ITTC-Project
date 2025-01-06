import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInquiryComponent } from './result-inquiry.component';

describe('ResultInquiryComponent', () => {
  let component: ResultInquiryComponent;
  let fixture: ComponentFixture<ResultInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
