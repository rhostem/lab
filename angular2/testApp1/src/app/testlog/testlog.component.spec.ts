/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestlogComponent } from './testlog.component';

describe('TestlogComponent', () => {
  let component: TestlogComponent;
  let fixture: ComponentFixture<TestlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
