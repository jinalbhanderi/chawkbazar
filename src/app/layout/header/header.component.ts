import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isSubMenuVisible: boolean = false;

  toggleSubMenu(event: Event) {
    event.preventDefault();
    this.isSubMenuVisible = !this.isSubMenuVisible;
  }

  cartItemCount: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItemCount = items.length; // Update the cart item count
    });
  }
  isCartVisible = false;

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  onCartClosed() {
    this.isCartVisible = false;
  }
}
