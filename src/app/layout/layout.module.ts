import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent,LayoutComponent, ShoppingCartComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule],
  exports: [],
})
export class LayoutModule {}
