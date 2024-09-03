import { Component } from '@angular/core';

@Component({
  selector: 'app-refined',
  templateUrl: './refined.component.html',
  styleUrls: ['./refined.component.css'],
})
export class RefinedComponent {
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
  images: Array<{ imageUrl: string; alt: string; link: string }> = [
    {
      imageUrl: '/assets/images/hero/two/banner-1.jpg',
      alt: 'winter collection',
      link: '/collections/winter-collection',
    },
    {
      imageUrl: '/assets/images/hero/two/banner-2.jpg',
      alt: 'gift collection',
      link: '/collections/gift-collection',
    },
    {
      imageUrl: '/assets/images/hero/two/banner-3.jpg',
      alt: 'party collection',
      link: '/collections/gift-collection',
    },
  ];
  slides3: any[] = [
    { imageUrl: '/assets/images/brands/fusion.png' },
    { imageUrl: '/assets/images/brands/blaze-fashion.png' },
    { imageUrl: '/assets/images/brands/club-shoes.png' },
    { imageUrl: '/assets/images/brands/elegance.png' },
    { imageUrl: '/assets/images/brands/fashadil.png' },
    { imageUrl: '/assets/images/brands/hoppister.png' },
    { imageUrl: '/assets/images/brands/hunter-shoes.png' },
    { imageUrl: '/assets/images/brands/shovia.png' },
  ];
  slides2: any[] = [
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=1920&q=100',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F33%2Fwomen.png&w=1920&q=100',
    },
  ];

  fimages = [
    {
      productName: 'Nike Comfy Vapor Maxpro',
      imageUrl: 'assets/images/products/featured/6.webp',
      price: '$220.00 - $250.00',
    },
    {
      productName: 'Addidas FuelCell Propel V2 Running Shoes',
      imageUrl: 'assets/images/products/featured/8.webp',
      price: '$45.00 - $50.00',
    },
    {
      productName: 'Tuma Grey',
      imageUrl: 'assets/images/products/featured/3.png',
      price: '$400.00 - $1,000.00',
    },
    {
      productName: 'Pissot Super Dry',
      imageUrl: 'assets/images/products/featured/5.png',
      price: '$120.00 - $150.00',
    },
    {
      productName: 'Zara Army Bag',
      imageUrl: 'assets/images/products/featured/1.png',
      price: '$260.00',
    },
    {
      productName: 'Tay Ben Aviator',
      imageUrl: 'assets/images/products/featured/4.png',
      price: '$1350.00',
    },
    {
      productName: 'Tuma Style Cap',
      imageUrl: 'assets/images/products/featured/2.png',
      price: '$150.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/featured/7.webp',
      price: '$1,150.00',
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
  slides = [
    {
      productName: 'Tuma Kidsa bag',
      imageUrl: 'assets/images/products/flash-sale/1.webp',
      price: '$40.00 - $50.00',
    },
    {
      productName: 'Zara Army Bag',
      imageUrl: 'assets/images/products/flash-sale/2.webp',
      price: '$260.00 - $300.00',
    },
    {
      productName: 'Tay Ben Aviator',
      imageUrl: 'assets/images/products/flash-sale/3.webp',
      price: '$1,350.00 - $1,500.00',
    },
    {
      productName: 'Tuma Style Cap',
      imageUrl: 'assets/images/products/flash-sale/4.webp',
      price: '$150.00 - $170.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/5.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/6.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/7.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/8.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/9.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      productName: 'Pior Womes Bangles',
      imageUrl: 'assets/images/products/flash-sale/10.webp',
      price: '$1,150.00 - $1,200.00',
    },
    // Add more products as needed
  ];
  topProducts = [
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
  ];
  products = [
    {
      id: 1,
      name: 'Hermes Galaxy Watch 3',
      imageUrl: '/assets/images/products/sel-product/1.webp',
      originalPrice: 3200.0,
      discountedPrice: 2996.0,
    },
    {
      id: 2,
      name: 'Hermes Carlton London',
      imageUrl: '/assets/images/products/sel-product/2.webp',
      originalPrice: 650.0,
      discountedPrice: 300.0,
    },
    {
      id: 3,
      name: 'H&M Boys Top',
      imageUrl: '/assets/images/products/sel-product/3.webp',
      originalPrice: 1000.0,
      discountedPrice: 350.0,
    },
    {
      id: 4,
      name: 'H & Dri-FIT Fleece',
      imageUrl: '/assets/images/products/sel-product/4.webp',
      originalPrice: 650.0,
      discountedPrice: 550.0,
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
