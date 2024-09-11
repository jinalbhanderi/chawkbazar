import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.css'],
})
export class WishlistsComponent {
  wishlistItems = [
    {
      imageUrl: 'assets/images/category/watch/1.webp',
      productLink: '/products/the-horse-original',
      productName: 'The Horse Original',
      price: '$190.00',
      oldPrice: '$200.00',
    },
    {
      imageUrl: 'assets/images/category/women/5.webp',
      productLink: '/products/nike-comfy-vapor-maxpro',
      productName: 'Nike Comfy Vapor Maxpro',
      price: '$220.00',
      oldPrice: '$250.00',
    },
    {
      imageUrl: 'assets/images/category/women/13.webp',
      productLink: '/products/addidas-fuelcell-propel-v2-running-shoes',
      productName: 'Addidas FuelCell Propel V2 Running Shoes',
      price: '$45.00',
      oldPrice: '$50.00',
    },
    {
      imageUrl: 'assets/images/category/bags/7.webp',
      productLink: '/products/tuma-kidsa-bag',
      productName: 'Tuma Kidsa bag',
      price: '$40.00',
      oldPrice: '$50.00',
    },
  ];
}
