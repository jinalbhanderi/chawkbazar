import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-watch',
  templateUrl: './cat-watch.component.html',
  styleUrls: ['./cat-watch.component.css'],
})
export class CatWatchComponent {
  products = [
    {
      imageUrl: 'assets/images/category/watch/1.webp',
      productName: 'The Horse Original',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/watch/2.webp',
      productName: 'Nike Car Wheel Watch',
      priceRange: '$$100.00 - $120.00',
    },
    {
      imageUrl: 'assets/images/category/watch/3.webp',
      productName: 'Hermes Galaxy Watch 3',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/watch/4.webp',
      productName: 'Parmani Submariner',
      priceRange: '$75.00 - $90.00',
    },
    {
      imageUrl: 'assets/images/category/watch/5.webp',
      productName: 'Pucchi Fasion watch',
      priceRange: '$950.00 - $1,150.00',
    },
    {
      imageUrl: 'assets/images/category/watch/6.webp',
      productName: 'Pissot Super Dry',
      priceRange: '$220.00 - $250.00',
    },
    {
      imageUrl: 'assets/images/category/watch/7.webp',
      productName: 'Tippot Classic',
      priceRange: '$210.00 - $250.00',
    },
  ];
}
