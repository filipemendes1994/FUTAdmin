/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AlunosService } from './alunos.service';

describe('Alunos Service', () => {
  beforeEachProviders(() => [AlunosService]);

  it('should ...',
      inject([AlunosService], (service: AlunosService) => {
    expect(service).toBeTruthy();
  }));
});
