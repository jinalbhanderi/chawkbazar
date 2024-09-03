import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { NotFoundComponent } from '../not-found/not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
