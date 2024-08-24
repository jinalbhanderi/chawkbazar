import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CheckoutComponent } from '../pages/all-pages/checkout/checkout.component';
import { ShposComponent } from '../pages/shpos/shpos.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout', component: ShoppingCartComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../pages/demos/demos.module').then((m) => m.DemosModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./../pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./../pages/all-pages/all-pages.module').then(
            (m) => m.AllPagesModule
          ),
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('./../pages/collections/collections.module').then(
            (m) => m.CollectionsModule
          ),
      },
      { path: 'shops', component: ShposComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
