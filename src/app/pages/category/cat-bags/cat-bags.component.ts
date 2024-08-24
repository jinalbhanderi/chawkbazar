import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cat-bags',
  templateUrl: './cat-bags.component.html',
  styleUrls: ['./cat-bags.component.css'],
})
export class CatBagsComponent {
  products = [
    {
      imageUrl: 'assets/images/category/bags/1.webp',
      productName: 'Philip Lim Leather Shoulder Bag',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/bags/2.webp',
      productName: 'Mac Nordace Laptop Bag',
      priceRange: '$$100.00 - $120.00',
    },
    {
      imageUrl: 'assets/images/category/bags/3.webp',
      productName: 'Givenchy Shoulder Bag',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/bags/4.webp',
      productName: 'Chanel Shoulder Bag',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/bags/5.webp',
      productName: 'Alex Maqueeen Shoulder Bag',
      priceRange: '$950.00 - $1,150.00',
    },
    {
      imageUrl: 'assets/images/category/bags/6.webp',
      productName: 'Chevis Womens Bag',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/bags/7.webp',
      productName: 'Tuma Kidsa bag',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/bags/8.webp',
      productName: 'Zara Army Bag',
      priceRange: '$220.00 - $250.00',
    },
  ];

}
