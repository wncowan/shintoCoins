import { BuyComponent } from './buy/buy.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MainComponent } from './main/main.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { EntryComponent } from './entry/entry.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'mine', component: MineComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent},
  { path: 'ledger', component: LedgerComponent},
  { path: 'ledger/:id', component: EntryComponent},
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }