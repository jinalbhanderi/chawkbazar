import { CategoriesModule } from './../pages/categories/categories.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CheckoutComponent } from '../pages/all-pages/checkout/checkout.component';
import { ShposComponent } from '../pages/shpos/shpos.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  // { path: 'checkout', component: ShoppingCartComponent },

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
        path: 'search',
        loadChildren: () =>
          import('./../pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./../pages/categories/categories.module').then(
            (m) => m.CategoriesModule
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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
