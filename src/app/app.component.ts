import { Component } from '@angular/core';
import { SAVINGS_CATEGORIES } from './mock-categories';
import { BudgetRow, SavingsCategory } from './services/manage-budget-rows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budget';
  budgetItems = SAVINGS_CATEGORIES;
  incomeRows: BudgetRow[] = [new BudgetRow(0,"Paycheck")];
}
