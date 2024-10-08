import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  declarations: [
    MyAccountComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, SharedModule],
})
export class UserModule {}
