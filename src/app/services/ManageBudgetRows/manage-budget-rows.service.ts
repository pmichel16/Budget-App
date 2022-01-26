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
  
  private rowsSubject: Subject<BudgetRow[]> = new Subject<BudgetRow[]>();
  private rows: BudgetRow[] = [];
  
  getRows(): Subject<BudgetRow[]> {
    return this.rowsSubject;
  }

  setInitial(rows: BudgetRow[]) {
    this.rows = rows;
    this.rowsSubject.next(rows);
  }

  addItem(row: BudgetRow) {
    this.rows.push(row);
    this.rowsSubject.next(this.rows);
  }

  removeItem(rowId: number) {
    //Still need to add binding to this.categories
    this.rows = this.rows.filter(row => row.id != rowId);
    this.rowsSubject.next(this.rows);
  }
}
