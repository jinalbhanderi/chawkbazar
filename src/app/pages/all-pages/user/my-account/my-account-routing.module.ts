import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { ContactNumberComponent } from './contact-number/contact-number.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AddressComponent } from './address/address.component';
import { CardsComponent } from './cards/cards.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'contact-number',
        component: ContactNumberComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'downloads',
        component: DownloadsComponent,
      },
      {
        path: 'wishlists',
        component: WishlistsComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
