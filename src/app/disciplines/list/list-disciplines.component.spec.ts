/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ListDisciplinesComponent } from './list-disciplines.component';

describe('Component: ListDisciplines', () => {
  it('should create an instance', () => {
    let component = new ListDisciplinesComponent();
    expect(component).toBeTruthy();
  });
});
