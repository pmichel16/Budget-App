import { TestBed } from '@angular/core/testing';

import { ManageBudgetRowsService } from './manage-budget-rows.service';

describe('ManageBudgetRowsService', () => {
  let service: ManageBudgetRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageBudgetRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
