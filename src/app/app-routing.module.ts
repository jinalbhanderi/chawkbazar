import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/all-pages/checkout/checkout.component';
import { MyAccountComponent } from './pages/all-pages/user/my-account/my-account.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'my-account', component: MyAccountComponent },
  {
    path: '',
    loadChildren: () =>
      import('../app/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/all-pages/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
