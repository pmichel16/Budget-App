import {BudgetRow, SavingsCategory} from './services/manage-budget-rows.service';

export const SAVINGS_CATEGORIES: SavingsCategory[] = [
    new SavingsCategory(1,"Savings",
      [ new BudgetRow(0,"Emergency"),
        new BudgetRow(1, "Retirement"),
        new BudgetRow(2, "Vacation"),
        new BudgetRow(3, "House Downpayment")
      ]),
      new SavingsCategory(2,"Housing",
      [ new BudgetRow(0,"Mortgage/Rent"),
        new BudgetRow(1, "Electricity"),
        new BudgetRow(2, "Gas"),
        new BudgetRow(3, "Internet"),
        new BudgetRow(4, "Cleaning")
      ]),
      new SavingsCategory(3,"Transportation",
      [ new BudgetRow(0,"Gasoline"),
        new BudgetRow(1, "Car Insurance"),
        new BudgetRow(2, "Bus/Public Transportation"),
        new BudgetRow(3, "Lyft"),
        new BudgetRow(4, "Parking")
      ]),
      new SavingsCategory(4,"Food",
      [ new BudgetRow(0,"Groceries"),
        new BudgetRow(1, "Restaurants")
      ]),
  ];
