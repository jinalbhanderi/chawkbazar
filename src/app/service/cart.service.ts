import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    this.loadCartItems();
  }

  addToCart(item: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.img = item.img; // Update image if needed
    } else {
      currentItems.push(item);
    }

    this.cartItemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  removeFromCart(item: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(
      (cartItem) => cartItem.name !== item.name
    );

    this.cartItemsSubject.next(updatedItems);
    this.saveCartItems(updatedItems);
  }

  private saveCartItems(items: any[]): void {
    // Save cart items to local storage or server
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  private loadCartItems(): void {
    // Load cart items from local storage or server
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItemsSubject.next(JSON.parse(savedItems));
    }
  }
  updateCartItem(updatedItem: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex(
      (cartItem) => cartItem.name === updatedItem.name
    );

    if (itemIndex !== -1) {
      currentItems[itemIndex] = updatedItem; // Update the item with new quantity and price
      this.cartItemsSubject.next(currentItems);
      this.saveCartItems(currentItems);
    }
  }
}
