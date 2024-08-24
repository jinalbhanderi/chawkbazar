import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-sneakers',
  templateUrl: './cat-sneakers.component.html',
  styleUrls: ['./cat-sneakers.component.css'],
})
export class CatSneakersComponent {
  products = [
    {
      imageUrl: 'assets/images/category/sneakers/1.webp',
      productName: 'Nike Aviator',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/sneakers/2.webp',
      productName: 'Armani Retaliate Shoes',
      priceRange: '$$100.00 - $120.00',
    },
    {
      imageUrl: 'assets/images/category/sneakers/3.webp',
      productName: 'Addidas FuelCell Propel V2 Running Shoes',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/sneakers/4.webp',
      productName: 'Tuma Grey',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/sneakers/5.webp',
      productName: 'Pike Green Thunder',
      priceRange: '$950.00 - $1,150.00',
    },
  ];
}
