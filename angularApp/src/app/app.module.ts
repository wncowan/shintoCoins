import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MainComponent } from './main/main.component';
import { EntryComponent } from './entry/entry.component'

import { FormsModule } from '@angular/forms';
import { ShintoService } from './shinto.service';

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    LedgerComponent,
    MainComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ShintoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }