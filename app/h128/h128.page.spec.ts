import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H128Page } from './h128.page';

describe('H128Page', () => {
  let component: H128Page;
  let fixture: ComponentFixture<H128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
