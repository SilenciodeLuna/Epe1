import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H64Page } from './h64.page';

describe('H64Page', () => {
  let component: H64Page;
  let fixture: ComponentFixture<H64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
