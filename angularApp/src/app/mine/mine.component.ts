import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer;
  answered = false;
  message = "";
  newTransaction = {};
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  }

  submit() {
    if (this.answer == 42) {
      this.answered = true;
      var last = this._shinto.shareLastTransaction();
      if(!last) {
        this.newTransaction = {
          balance: 1,
          action: "mined coins",
          amount: 1,
          value: 1
        }
      } else {
        this.newTransaction = {
          balance: last.balance + 1,
          action: "mined coins",
          amount: last.amount + 1,
          value: last.value + 1
        }
      }
      this._shinto.addTransaction(this.newTransaction);
    } else {
      this.message = "Incorrect -- try again."
    }
  }
  
  resetForm() {
    this.answered=false;
    this.answer="";
  }
}