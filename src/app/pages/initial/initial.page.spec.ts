import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPage } from './initial.page';

describe('InitialPage', () => {
  let component: InitialPage;
  let fixture: ComponentFixture<InitialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
