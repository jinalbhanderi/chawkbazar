import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css'],
})
export class ProductPopupComponent {
  @Input() isOpen = false;
  @Input() title: string | null = null;
  @Input() description: string | null = null;
  @Input() newPrice: string | null = null;
  @Input() imageSrc: string | null = null;
  @Input() oldprice: string | null = null;
  @Input() colors: any[] = [];
  @Output() close = new EventEmitter<void>();
  cart: any[] = [];
  constructor(private cartService: CartService) {}
  onClose(): void {
    this.close.emit();
  }

  addToCart(): void {
    if (this.title && this.newPrice) {
      const item = {
        img: this.imageSrc,
        name: this.title,
        price: this.newPrice,
        quantity: 1,
        oldprice: this.oldprice,
      };

      this.cartService.addToCart(item);
    } else {
      console.error('Product data is missing');
    }
  }

  // decrementItem(item: any) {
  //   if (item.quantity > 1) {
  //     item.quantity -= 1;
  //   }
  // }

  // incrementItem(item: any) {
  //   item.quantity += 1;
  // }
  quantity: number = 1;
  maxQuantity: number = 10; // Set a maximum quantity if needed
  increment() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
