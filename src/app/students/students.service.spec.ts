/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { StudentsService } from './students.service';

describe('Students Service', () => {
  beforeEachProviders(() => [StudentsService]);

  it('should ...',
      inject([StudentsService], (service: StudentsService) => {
    expect(service).toBeTruthy();
  }));
});
