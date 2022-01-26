import { Component, OnInit, Input, Output } from '@angular/core';
import { ManageBudgetRowsService } from 'src/app/services/manage-budget-rows.service';

@Component({
  selector: 'app-budgetItemRow',
  templateUrl: './budgetItemRow.component.html'
})
export class BudgetItemRowComponent implements OnInit {

  deleteVisible: string = "hidden";

  @Input() title: string = "";
  @Input() manageBudgetRowsService: ManageBudgetRowsService = new ManageBudgetRowsService();

  constructor() { }

  ngOnInit(): void {
  }

  inputSelected(): void {
    this.deleteVisible = "visible";
  }

  inputDeselected(): void {
    this.deleteVisible = "hidden";
  }

  deleteRow(rowId: number): void {
    this.manageBudgetRowsService.removeItem(rowId);
  }
}
