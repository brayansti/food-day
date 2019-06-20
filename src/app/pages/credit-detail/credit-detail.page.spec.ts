import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDetailPage } from './credit-detail.page';

describe('CreditDetailPage', () => {
  let component: CreditDetailPage;
  let fixture: ComponentFixture<CreditDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
