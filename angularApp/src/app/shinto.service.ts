import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

@Injectable()
export class ShintoService {
  balance = 0;
  ledger = {};
  id = 0;

  constructor() { }

  shareLedger() {
    return this.ledger;
  }
  shareLastTransaction() {
    //If there have been transactions, return the last one (current id reserved for next transaction).
    if (this.id) {
      return this.ledger[this.id-1];
    //Otherwise, return false (first transaction will be created with initial values).
    } else {
      return false;
    }
  }
  addTransaction(transaction) {
    this.ledger[this.id] = transaction;
    transaction.id = this.id;
    this.id++;
    //add to the ledger
  }
  getTransaction(id) {
    var entry = this.ledger[id];
    if(entry) {
      return entry;
    } else {
      return false;
    }
  }
}