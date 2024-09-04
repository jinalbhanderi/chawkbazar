import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartItems: any[] = [];
  isLoading: boolean = true;
  isCartOpen = true;

  constructor(private cartService: CartService) {}

  @Output() cartClosed = new EventEmitter<void>(); // Emit event when cart is closed

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.isLoading = false;
    });
  }

  closeCart() {
    this.isCartOpen = false;
    this.cartClosed.emit();
  }

  decrementItem(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.totalPrice = this.calculateTotalPrice(item);
      this.cartService.updateCartItem(item); // Update cart item in the service
    }
  }

  incrementItem(item: any) {
    item.quantity += 1;
    item.totalPrice = this.calculateTotalPrice(item);
    this.cartService.updateCartItem(item); // Update cart item in the service
  }

  calculateTotalPrice(item: any): number {

    const price = this.parsePrice(item.price);
    const quantity = Number(item.quantity) || 0;


    return price * quantity;
  }

  parsePrice(priceString: any): number {
    if (typeof priceString === 'string') {
      return parseFloat(priceString.replace(/[^0-9.-]+/g, '')) || 0;
    } else {
      console.warn(
        'Expected priceString to be a string, but got:',
        priceString
      );
      return 0;
    }
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  get totalPrice(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + (item.totalPrice || this.calculateTotalPrice(item)),
      0
    );
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
  }
}
