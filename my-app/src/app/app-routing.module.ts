import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';
import { TraderComponent } from './trader/trader.component';
import { CommodityComponent } from './Commodity/Commodity.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		{ path: 'Trader', component: TraderComponent},
		{ path: 'Commodity', component: CommodityComponent},
		{ path: 'Transaction', component: TransactionComponent},
		{path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
