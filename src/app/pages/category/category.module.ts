import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AllCatComponent } from './all-cat/all-cat.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LayoutModule } from "../../layout/layout.module";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    CategoryComponent,
    AllCatComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    RouterModule,
    ModalModule.forRoot(),
    LayoutModule,
    SharedModule
],
})
export class CategoryModule {}
