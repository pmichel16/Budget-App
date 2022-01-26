import { Injectable, TestabilityRegistry } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class SavingsCategory {
  id: number;
  title: string;
  budgetRows: BudgetRow[];

  constructor(id: number, title: string, rows: BudgetRow[]) {
      this.id = id;
      this.title = title;
      this.budgetRows = rows;
  }
}

export class BudgetRow {
  id: number;
  label: string;

  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}

@Injectable()
export class ManageBudgetRowsService {
  
  private test: Subject<BudgetRow[]> = new Subject<BudgetRow[]>();
  private rows: BudgetRow[] = [];
  
  getRows(): Subject<BudgetRow[]> {
    return this.test;
  }

  setInitial(rows: BudgetRow[]) {
    this.rows = rows;
    this.test.next(rows);
  }

  addItem(row: BudgetRow) {
    this.rows.push(row);
    this.test.next(this.rows);
  }

  removeItem(rowId: number) {
    //Still need to add binding to this.categories
    this.rows = this.rows.filter(row => row.id != rowId);
    this.test.next(this.rows);
  }
}
