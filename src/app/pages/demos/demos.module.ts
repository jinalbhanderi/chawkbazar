import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { ModernComponent } from './modern/modern.component';
import { StandardComponent } from './standard/standard.component';
import { CarouselModule } from 'primeng/carousel';
import { MinimalComponent } from './minimal/minimal.component';
import { VintageComponent } from './vintage/vintage.component';
import { ClassicComponent } from './classic/classic.component';
import { TrendyComponent } from './trendy/trendy.component';
import { ElegantComponent } from './elegant/elegant.component';
import { RefinedComponent } from './refined/refined.component';
import { FashionComponent } from './fashion/fashion.component';


@NgModule({
  declarations: [ModernComponent, StandardComponent, MinimalComponent, VintageComponent, ClassicComponent, TrendyComponent, ElegantComponent, RefinedComponent, FashionComponent],
  imports: [CommonModule, DemosRoutingModule, CarouselModule],
})
export class DemosModule {}
