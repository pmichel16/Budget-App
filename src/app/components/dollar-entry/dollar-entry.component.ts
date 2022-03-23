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
    //Only allow one decimal point, and 2 characters after the decimal
    let splitStr:string[] = event.target.value.split('.');
    if(splitStr.length > 2) {
      let result = splitStr[0]+"."+splitStr[1];
      splitStr = splitStr.slice(2);
      splitStr.forEach(s => result += s);
      event.target.value = result;
    }
    var index = event.target.value.indexOf('.')
    if(index > -1) {
      event.target.value = event.target.value.substr(0, index + 3);
    }

    //If the entry doesn't start with a $, then prepend the $ sign
    let pattern = /^\$/;
    if(!pattern.test(event.target.value)){
      event.target.value = "$" + event.target.value;
    }
  }
}
