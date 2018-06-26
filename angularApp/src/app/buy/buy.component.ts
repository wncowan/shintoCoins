import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  newTransaction = {};
  toBuy = 0;
  bought = false;
  message;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  } 

  resetForm() {
    this.bought = false;
    this.toBuy = 0;
    this.message = "";
  }

  submit() {
    if (this.toBuy > 0) {
      this.bought = true;
      var last = this._shinto.shareLastTransaction();
      if(!last) {
        this.newTransaction = {
          balance: this.toBuy,
          action: "bought coins",
          amount: this.toBuy,
          value: this.toBuy
        }
      } else {
        this.newTransaction = {
          balance: last.balance + this.toBuy,
          action: "bought coins",
          amount: last.amount + this.toBuy,
          value: last.value + this.toBuy
        }
      }
      this._shinto.addTransaction(this.newTransaction);
    } else {
      this.message = "You must buy at least 1 coin."
    }
  }
}