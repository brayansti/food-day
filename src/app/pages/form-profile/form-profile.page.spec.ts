import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfilePage } from './form-profile.page';

describe('FormProfilePage', () => {
  let component: FormProfilePage;
  let fixture: ComponentFixture<FormProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
