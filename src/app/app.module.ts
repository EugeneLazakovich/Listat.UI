import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { AddSaleComponent } from './components/sales/add-sale/add-sale.component';
import { FormsModule } from '@angular/forms';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    SalesListComponent,
    AddItemComponent,
    AddSaleComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
