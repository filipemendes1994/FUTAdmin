/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ListClassesComponent } from './list-classes.component';

describe('Component: ListClasses', () => {
  it('should create an instance', () => {
    let component = new ListClassesComponent();
    expect(component).toBeTruthy();
  });
});
