import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemRowComponent } from './budgetItemRow.component';

describe('BudgetItemRowComponent', () => {
  let component: BudgetItemRowComponent;
  let fixture: ComponentFixture<BudgetItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
