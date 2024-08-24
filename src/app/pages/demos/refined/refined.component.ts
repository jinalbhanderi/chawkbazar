import { Component } from '@angular/core';

@Component({
  selector: 'app-refined',
  templateUrl: './refined.component.html',
  styleUrls: ['./refined.component.css'],
})
export class RefinedComponent {
  categories = [
    {
      name: 'Women',
      imageUrl: '/assets/images/aaa.png',
      link: '/category/women',
      count: 27,
    },
    {
      name: 'Watch',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=64&q=75',
      link: '/category/watch',
      count: 7,
    },
    {
      name: 'Sunglass',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=64&q=75',
      link: '/category/sunglass',
      count: 6,
    },
    {
      name: 'Sports',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=64&q=75',
      link: '/category/sports',
      count: 14,
    },
    {
      name: 'Sneakers',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=64&q=75',
      link: '/category/sneakers',
      count: 5,
    },
    {
      name: 'Men',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=64&q=75',
      link: '/category/men',
      count: 6,
    },
    {
      name: 'Kids',
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=64&q=75',
      link: '/category/kids',
      count: 6,
    },
    {
      name: 'Bags',
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
  slides2: any[] = [
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=1920&q=100',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F33%2Fwomen.png&w=1920&q=100',
    },
  ];

  fimages = [
    {
      title: 'Nike Comfy Vapor Maxpro',
      url: 'assets/images/products/featured/6.png',
      price: '$220.00 - $250.00',
    },
    {
      title: 'Addidas FuelCell Propel V2 Running Shoes',
      url: 'assets/images/products/featured/8.png',
      price: '$45.00 - $50.00',
    },
    {
      title: 'Tuma Grey',
      url: 'assets/images/products/featured/3.png',
      price: '$400.00 - $1,000.00',
    },
    {
      title: 'Pissot Super Dry',
      url: 'assets/images/products/featured/5.png',
      price: '$120.00 - $150.00',
    },
    {
      title: 'Zara Army Bag',
      url: 'assets/images/products/featured/1.png',
      price: '$260.00',
    },
    {
      title: 'Tay Ben Aviator',
      url: 'assets/images/products/featured/4.png',
      price: '$1350.00',
    },
    {
      title: 'Tuma Style Cap',
      url: 'assets/images/products/featured/2.png',
      price: '$150.00',
    },
    {
      title: 'Pior Womes Bangles',
      url: 'assets/images/products/featured/7.png',
      price: '$1,150.00',
    },
  ];
  items = [
    {
      title: 'Zara Monte Carlo',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
      price: '$80.00 - $100.00',
    },
    {
      title: 'Zara Miss Chase',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/234/Chawkbazar1.png',
      price: '$90.00 - $100.00',
    },
    {
      title: 'White Oxford Shirt',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/232/Casual-Wear-1-1.jpg',
      price: '$10.00 - $40.00',
    },
    {
      title: 'The Horse Original',
      image:
        'assets/images/category/watch/1.webp',
      price: '$190.00 - $200.00',
    },
    {
      title: 'Roadster Women Round Neck',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/228/Chawkbazar22.png',
      price: '$30.00 - $50.00',
    },
    {
      title: 'Reyban Havana Phantos Sunglasses',
      image:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F226%2FSunglasess-2-1.jpg&w=1920&q=100',
      price: '$80.00 - $100.00',
    },
    {
      title: 'Philip Lim Leather Shoulder Bag',
      image:
        'assets/images/category/bags/1.webp',
      price: '$250.00 - $260.00',
    },
    {
      title: 'Nike Pro Mesh Top with Leggins',
      image:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F223%2FCasual-Wear-4-1.jpg&w=1920&q=100',
      price: '$30.00 - $35.00',
    },
    {
      title: 'Nike Comfy Vapor Maxpro',
      image:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=1920&q=100',
      price: '$220.00 - $250.00',
    },
    {
      title: 'Nike Car Wheel Watch',
      image:
        'assets/images/category/watch/2.webp',
      price: '$230.00 - $250.00',
    },
  ];
  slides = [
    {
      title: 'Tuma Kidsa bag',
      image: 'assets/images/products/flash-sale/1.webp',
      price: '$40.00 - $50.00',
    },
    {
      title: 'Zara Army Bag',
      image: 'assets/images/products/flash-sale/2.webp',
      price: '$260.00 - $300.00',
    },
    {
      title: 'Tay Ben Aviator',
      image: 'assets/images/products/flash-sale/3.webp',
      price: '$1,350.00 - $1,500.00',
    },
    {
      title: 'Tuma Style Cap',
      image: 'assets/images/products/flash-sale/4.webp',
      price: '$150.00 - $170.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/5.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/6.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/7.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/8.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/9.webp',
      price: '$1,150.00 - $1,200.00',
    },
    {
      title: 'Pior Womes Bangles',
      image: 'assets/images/products/flash-sale/10.webp',
      price: '$1,150.00 - $1,200.00',
    },
    // Add more products as needed
  ];
  topProducts = [
    {
      title: 'Zara Monte Carlo',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
      price: '$80.00 - $100.00',
    },
    {
      title: 'Zara Miss Chase',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/234/Chawkbazar1.png',
      price: '$90.00 - $100.00',
    },
    {
      title: 'White Oxford Shirt',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/232/Casual-Wear-1-1.jpg',
      price: '$10.00 - $40.00',
    },
    {
      title: 'The Horse Original',
      image:
        'assets/images/category/watch/1.webp',
      price: '$190.00 - $200.00',
    },
    {
      title: 'Roadster Women Round Neck',
      image:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/228/Chawkbazar22.png',
      price: '$30.00 - $50.00',
    },
    {
      title: 'Reyban Havana Phantos Sunglasses',
      image:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F226%2FSunglasess-2-1.jpg&w=1920&q=100',
      price: '$80.00 - $100.00',
    },
  ];
}
