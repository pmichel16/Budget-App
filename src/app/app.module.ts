import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { BudgetItemComponent } from './components/budgetItem/budgetItem.component';
import { BudgetItemRowComponent } from './components/budgetItemRow/budgetItemRow.component';

import {ManageBudgetRowsService} from './services/ManageBudgetRows/manage-budget-rows.service';
import { DollarEntryComponent } from './components/dollar-entry/dollar-entry.component';
import { TransactionHeaderComponent } from './components/transaction-header/transaction-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetItemComponent,
    BudgetItemRowComponent,
    DollarEntryComponent,
    TransactionHeaderComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [ManageBudgetRowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
