import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorPage } from './razor.page';

describe('RazorPage', () => {
  let component: RazorPage;
  let fixture: ComponentFixture<RazorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RazorPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
