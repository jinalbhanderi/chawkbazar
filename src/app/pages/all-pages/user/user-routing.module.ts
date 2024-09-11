import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'my-account', component: MyAccountComponent },
  // {
  //   path: 'my-account',
  //   loadChildren: () =>
  //     import('../user/my-account/my-account.module').then((m) => m.MyAccountModule),
  // },
  { path: 'forget-password', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
