import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatMenComponent } from './cat-men/cat-men.component';
import { CategoryComponent } from './category.component';
import { CatWomenComponent } from './cat-women/cat-women.component';
import { CatSneakersComponent } from './cat-sneakers/cat-sneakers.component';
import { CatSportsComponent } from './cat-sports/cat-sports.component';
import { CatWatchComponent } from './cat-watch/cat-watch.component';
import { CatBagsComponent } from './cat-bags/cat-bags.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      { path: 'men', component: CatMenComponent },
      { path: 'women', component: CatWomenComponent },
      { path: 'sneakers', component: CatSneakersComponent },
      { path: 'sports', component: CatSportsComponent },
      { path: 'watch', component: CatWatchComponent },
      { path: 'bags', component: CatBagsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
