import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { ClassicComponent } from './classic/classic.component';
import { DemosRoutingModule } from './demos-routing.module';
import { ElegantComponent } from './elegant/elegant.component';
import { FashionComponent } from './fashion/fashion.component';
import { MinimalComponent } from './minimal/minimal.component';
import { ModernComponent } from './modern/modern.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RefinedComponent } from './refined/refined.component';
import { StandardComponent } from './standard/standard.component';
import { TrendyComponent } from './trendy/trendy.component';
import { VintageComponent } from './vintage/vintage.component';

@NgModule({
  declarations: [
    ModernComponent,
    StandardComponent,
    MinimalComponent,
    VintageComponent,
    ClassicComponent,
    TrendyComponent,
    ElegantComponent,
    RefinedComponent,
    FashionComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, DemosRoutingModule, CarouselModule],
  exports: [ProductDetailComponent],
})
export class DemosModule {}
