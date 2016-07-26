/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PaymentsCenter } from './payments-center.component';

describe('Component: Payments', () => {
  it('should create an instance', () => {
    let component = new PaymentsCenter();
    expect(component).toBeTruthy();
  });
});
