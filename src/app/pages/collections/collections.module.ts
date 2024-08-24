import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { OnSaleComponent } from './on-sale/on-sale.component';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnSaleComponent,
    ProductPopupComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    FormsModule
  ]
})
export class CollectionsModule { }
