import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBorrowerPage } from './form-borrower.page';

describe('FormBorrowerPage', () => {
  let component: FormBorrowerPage;
  let fixture: ComponentFixture<FormBorrowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBorrowerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBorrowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
