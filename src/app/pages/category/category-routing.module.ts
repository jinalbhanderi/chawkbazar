import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCatComponent } from './all-cat/all-cat.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'men',
        component: AllCatComponent,
        data: { category: 'men', title: 'Men' },
      },
      {
        path: 'women',
        component: AllCatComponent,
        data: { category: 'women', title: 'Women' },
      },
      {
        path: 'sneakers',
        component: AllCatComponent,
        data: { category: 'sneakers', title: 'Sneakers' },
      },
      {
        path: 'sports',
        component: AllCatComponent,
        data: { category: 'sports', title: 'Sports' },
      },
      {
        path: 'watch',
        component: AllCatComponent,
        data: { category: 'watch', title: 'Watch' },
      },
      {
        path: 'bags',
        component: AllCatComponent,
        data: { category: 'bags', title: 'Bags' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
