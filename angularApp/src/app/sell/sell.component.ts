import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  newTransaction = {};
  toSell = 0;
  sold = false;
  message;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  }

  resetForm() {
    this.sold = false;
    this.toSell = 0;
    this.message = "";
  }

  submit() {
    var last = this._shinto.shareLastTransaction();
    if (this.toSell < 1) {
      this.message = "You must sell at least one coin."
    } else {
      if(!last) {
        this.message = "Buy or mine some coins first."
      } else {
        if (last.balance < this.toSell) {
          this.message = "You cannot sell more coins than you have."
        } else {
          this.newTransaction = {
            balance: last.balance - this.toSell,
            action: "sold coins",
            amount: last.amount - this.toSell,
            value: last.value - this.toSell
          }
          this._shinto.addTransaction(this.newTransaction);
          this.sold = true;
        }
      }
    }
  }
}