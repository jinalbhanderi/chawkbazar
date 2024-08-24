import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModernComponent } from './modern/modern.component';
import { StandardComponent } from './standard/standard.component';
import { MinimalComponent } from './minimal/minimal.component';
import { VintageComponent } from './vintage/vintage.component';
import { ClassicComponent } from './classic/classic.component';
import { TrendyComponent } from './trendy/trendy.component';
import { ElegantComponent } from './elegant/elegant.component';
import { RefinedComponent } from './refined/refined.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [
  {
    path: '',
    component: ModernComponent,
  },
  { path: 'standard', component: StandardComponent },
  { path: 'minimal', component: MinimalComponent },
  { path: 'vintage', component: VintageComponent },
  { path: 'classic', component: ClassicComponent },
  { path: 'trendy', component: TrendyComponent },
  { path: 'elegant', component: ElegantComponent },
  { path: 'refined', component: RefinedComponent },
  { path: 'fashion', component: FashionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
