import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dollar-entry',
  templateUrl: './dollar-entry.component.html'
})
export class DollarEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  validateInput(event: any){
    //Always filter out characters that aren't digits or decimal points
    //TODO: Only allow one decimal point
    event.target.value = event.target.value.replace(/[^\d\.]/g, "");

    //If the entry doesn't start with a $, then prepend the $ sign
    let pattern = /^\$/;
    if(!pattern.test(event.target.value)){
      event.target.value = "$" + event.target.value;
    }
  }
}
