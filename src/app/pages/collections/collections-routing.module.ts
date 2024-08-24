import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections.component';
import { OnSaleComponent } from './on-sale/on-sale.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,
    children: [
      {
        path: 'new-sports',
        component: OnSaleComponent,
        data: { category: 'new-sports', title: 'New Sports' },
      },
      {
        path: 'exclusive-sunglasses',
        component: OnSaleComponent,
        data: {
          category: 'exclusive-sunglasses',
          title: 'exclusive sunglasses',
        },
      },
      {
        path: 'product-coupons',
        component: OnSaleComponent,
        data: { category: 'product-coupons', title: 'product coupons' },
      },
      {
        path: 'new-backpack',
        component: OnSaleComponent,
        data: { category: 'new-backpack', title: 'new backpack' },
      },
      {
        path: 'womens-collection',
        component: OnSaleComponent,
        data: { category: 'womens-collection', title: 'womens collection' },
      },
      {
        path: 'mens-collection',
        component: OnSaleComponent,
        data: { category: 'mens-collection', title: 'mens collection' },
      },
      {
        path: 'flash-sale',
        component: OnSaleComponent,
        data: { category: 'flash-sale', title: 'flash sale' },
      },
      {
        path: 'featured-products',
        component: OnSaleComponent,
        data: { category: 'featured-products', title: 'Featured Products' },
      },
      {
        path: 'kids-collection',
        component: OnSaleComponent,
        data: { category: 'kids-collection', title: 'Kids Collection' },
      },
      {
        path: 'winter-collection',
        component: OnSaleComponent,
        data: { category: 'winter-collection', title: 'Winter Collection' },
      },
      {
        path: 'gift-collection',
        component: OnSaleComponent,
        data: { category: 'gift-collection', title: 'Gift Collection' },
      },
      {
        path: 'winter-offer',
        component: OnSaleComponent,
        data: { category: 'winter-offer', title: 'Winter Offer' },
      },
      {
        path: 'on-sale',
        component: OnSaleComponent,
        data: { category: 'on-sale', title: 'On Sale' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
