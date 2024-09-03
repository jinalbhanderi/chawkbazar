import { Component } from '@angular/core';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.css'],
})
export class MinimalComponent {
  categories = [
    {
      productName: 'Women',
      imageUrl: '/assets/images/aaa.png',
      link: '/category/women',
      count: 27,
    },
    {
      productName: 'Watch',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=64&q=75',
      link: '/category/watch',
      count: 7,
    },
    {
      productName: 'Sunglass',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=64&q=75',
      link: '/category/sunglass',
      count: 6,
    },
    {
      productName: 'Sports',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=64&q=75',
      link: '/category/sports',
      count: 14,
    },
    {
      productName: 'Sneakers',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=64&q=75',
      link: '/category/sneakers',
      count: 5,
    },
    {
      productName: 'Men',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=64&q=75',
      link: '/category/men',
      count: 6,
    },
    {
      productName: 'Kids',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=64&q=75',
      link: '/category/kids',
      count: 6,
    },
    {
      productName: 'Bags',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=64&q=75',
      link: '/category/bags',
      count: 6,
    },
  ];
  images: Array<{ src: string; alt: string; link: string }> = [
    {
      src: '/assets/images/hero/two/banner-1.jpg',
      alt: 'winter collection',
      link: '/collections/winter-collection',
    },
    {
      src: '/assets/images/hero/two/banner-2.jpg',
      alt: 'gift collection',
      link: '/collections/gift-collection',
    },
    {
      src: '/assets/images/hero/two/banner-3.jpg',
      alt: 'party collection',
      link: '/collections/gift-collection',
    },
  ];
  products = [
    {
      productName: 'Zara Monte Carlo',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
      priceRange: [80, 100],
    },
    {
      productName: 'Zara Miss Chase',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/234/Chawkbazar1.png',
      price: 90,
      oldPrice: 100,
    },
    {
      productName: 'White Oxford Shirt',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/232/Casual-Wear-1-1.jpg',
      priceRange: [10, 40],
    },
    {
      productName: 'The Horse Original',
      imageUrl: 'assets/images/category/watch/1.webp',
      price: 190,
      oldPrice: 200,
    },
  ];

  items = [
    {
      productName: 'Zara Monte Carlo',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
      price: '$80.00 - $100.00',
    },
    {
      productName: 'Zara Miss Chase',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/234/Chawkbazar1.png',
      price: '$90.00 - $100.00',
    },
    {
      productName: 'White Oxford Shirt',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/232/Casual-Wear-1-1.jpg',
      price: '$10.00 - $40.00',
    },
    {
      productName: 'The Horse Original',
      imageUrl: 'assets/images/category/watch/1.webp',
      price: '$190.00 - $200.00',
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/228/Chawkbazar22.png',
      price: '$30.00 - $50.00',
    },
    {
      productName: 'Reyban Havana Phantos Sunglasses',
      imageUrl:
        'assets/images/category/sunglass/1.webp',
      price: '$80.00 - $100.00',
    },
    {
      productName: 'Philip Lim Leather Shoulder Bag',
      imageUrl: 'assets/images/category/bags/1.webp',
      price: '$250.00 - $260.00',
    },
    {
      productName: 'Nike Pro Mesh Top with Leggins',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F223%2FCasual-Wear-4-1.jpg&w=1920&q=100',
      price: '$30.00 - $35.00',
    },
    {
      productName: 'Nike Comfy Vapor Maxpro',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=1920&q=100',
      price: '$220.00 - $250.00',
    },
    {
      productName: 'Nike Car Wheel Watch',
      imageUrl: 'assets/images/category/watch/2.webp',
      price: '$230.00 - $250.00',
    },
  ];
  slides3: any[] = [
    { src: '/assets/images/brands/fusion.png' },
    { src: '/assets/images/brands/blaze-fashion.png' },
    { src: '/assets/images/brands/club-shoes.png' },
    { src: '/assets/images/brands/elegance.png' },
    { src: '/assets/images/brands/fashadil.png' },
    { src: '/assets/images/brands/hoppister.png' },
    { src: '/assets/images/brands/hunter-shoes.png' },
    { src: '/assets/images/brands/shovia.png' },
  ];
  slides4: any[] = [
    {
      src: 'assets/images/products/featured/1.png',
      productName: 'New Spring Knits',
      price: 250,
      originalPrice: 260,
    },
    {
      src: 'assets/images/products/featured/1.png',
      productName: 'Zara Army Bag',
      price: 260.0, // Ensure this is a number, not a string
      originalPrice: 300.0, // Ensure this is a number, not a string
    },
  ];

  collectionItems = [
    {
      productName: 'New Spring Knits',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/1.jpg',
      link: '/search',
    },
    {
      productName: 'Down To The Core',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/2.jpg',
      link: '/search',
    },
    {
      productName: 'New Winter Knits',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/3.jpg',
      link: '/search',
    },
  ];

  selectedProduct: any = null;
  showPopup = false;

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }
  openPopup(product: any): void {
    debugger;
    this.selectedProduct = product;
    this.showPopup = true;
  }
}
