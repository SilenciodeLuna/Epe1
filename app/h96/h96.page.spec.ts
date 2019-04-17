import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H96Page } from './h96.page';

describe('H96Page', () => {
  let component: H96Page;
  let fixture: ComponentFixture<H96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
