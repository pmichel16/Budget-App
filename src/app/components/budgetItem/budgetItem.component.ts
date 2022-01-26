import { Component, OnInit, Input } from '@angular/core';
import { BudgetRow} from '../../services/ManageBudgetRows/manage-budget-rows.service';
import { ManageBudgetRowsService } from 'src/app/services/ManageBudgetRows/manage-budget-rows.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-budgetItem',
  templateUrl: './budgetItem.component.html'
})
export class BudgetItemComponent implements OnInit {

  btnText: string = "keyboard_arrow_up";
  trashVisible: boolean = false;
  rowsSubject: Subject<BudgetRow[]> = new Subject<BudgetRow[]>();
  manageBudgetRowsService: ManageBudgetRowsService = new ManageBudgetRowsService;

  
  @Input() budgetRows: BudgetRow[] = [];
  @Input() id: number = 0;
  @Input() title: string = "";
  
  constructor( ) { }

  ngOnInit(): void {
    this.manageBudgetRowsService.setInitial(this.budgetRows);
    this.rowsSubject = this.manageBudgetRowsService.getRows();
    this.rowsSubject.subscribe(rows => this.budgetRows = rows);
  }

  changeText(): void {
    this.btnText == "keyboard_arrow_down" ? this.btnText = "keyboard_arrow_up" : this.btnText = "keyboard_arrow_down";
  }

  addItem(): void {
    var newItem = new BudgetRow(this.budgetRows.length + 1, "whatever");
    this.manageBudgetRowsService.addItem(newItem);
  }

}
