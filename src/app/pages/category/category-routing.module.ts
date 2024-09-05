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
        path: '',
        component: AllCatComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
