/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PagamentosCenter } from './pagamentos-center.component';

describe('Component: Pagamentos', () => {
  it('should create an instance', () => {
    let component = new PagamentosCenter();
    expect(component).toBeTruthy();
  });
});
