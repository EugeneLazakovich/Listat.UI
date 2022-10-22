import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { AddSaleComponent } from './components/sales/add-sale/add-sale.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: 'items/add',
    component: AddItemComponent
  },
  {
    path: 'items/edit/:id',
    component: EditItemComponent
  },
  {
    path: 'auctions',
    component: SalesListComponent
  },
  {
    path: 'auctions/add',
    component: AddSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
