import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { ContactNumberComponent } from './contact-number/contact-number.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
import { CardsComponent } from './cards/cards.component';
import { AddressComponent } from './address/address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    ContactNumberComponent,
    DashboardComponent,
    OrdersComponent,
    DownloadsComponent,
    WishlistsComponent,
    CardsComponent,
    AddressComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
  ]
})
export class MyAccountModule { }
