import { Component, OnInit, Input, Output } from '@angular/core';
import { BudgetRow, ManageBudgetRowsService } from 'src/app/services/ManageBudgetRows/manage-budget-rows.service';

@Component({
  selector: 'app-budgetItemRow',
  templateUrl: './budgetItemRow.component.html'
})
export class BudgetItemRowComponent implements OnInit {

  deleteVisible: string = "hidden";

  @Input() title: string = "";
  @Input() id: number = 0;
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

  deleteRow(): void {
    this.manageBudgetRowsService.removeItem(this.id);
  }
}
