import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { RouterModule } from '@angular/router';
import { CatMenComponent } from './cat-men/cat-men.component';
import { CategoryComponent } from './category.component';
import { CatWomenComponent } from './cat-women/cat-women.component';
import { CatSneakersComponent } from './cat-sneakers/cat-sneakers.component';
import { CatSportsComponent } from './cat-sports/cat-sports.component';
import { CatWatchComponent } from './cat-watch/cat-watch.component';
import { CatBagsComponent } from './cat-bags/cat-bags.component';


@NgModule({
  declarations: [CatMenComponent, CategoryComponent, CatWomenComponent, CatSneakersComponent, CatSportsComponent, CatWatchComponent, CatBagsComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    RouterModule
  ]
})
export class CategoryModule { }
