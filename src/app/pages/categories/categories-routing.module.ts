import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'women', pathMatch: 'full' },
  { path: ':categoryName', component: CategoriesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
