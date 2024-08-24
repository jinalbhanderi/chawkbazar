import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPagesRoutingModule } from './all-pages-routing.module';
import { OffersComponent } from './offers/offers.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    OffersComponent,
    FaqComponent,
    PrivacyComponent,
    TermsComponent,
    ContactUsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    AllPagesRoutingModule
  ]
})
export class AllPagesModule { }
