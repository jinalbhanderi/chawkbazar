import { Component } from '@angular/core';

@Component({
  selector: 'app-trendy',
  templateUrl: './trendy.component.html',
  styleUrls: ['./trendy.component.css'],
})
export class TrendyComponent {
  slides: any[] = [
    { src: '/assets/images/banner/trendy/desktop/banner-1.jpg' },
    { src: '/assets/images/banner/trendy/desktop/banner-2.jpg' },
    { src: '/assets/images/banner/trendy/desktop/banner-3.jpg' },
  ];
  slides2: any[] = [
    { src: '/assets/images/products/featured-categories/1.png' },
    { src: '/assets/images/products/featured-categories/2.png' },
    { src: '/assets/images/products/featured-categories/3.png' },
    { src: '/assets/images/products/featured-categories/4.png' },
    { src: '/assets/images/products/featured-categories/5.png' },
    { src: '/assets/images/products/featured-categories/6.png' },
  ];
  products = [
    {
      title: 'Nike Comfy Vapor Maxpro',
      imageUrl: 'assets/images/products/featured/1.png',
      priceRange: '$220.00 - $250.00',
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: 'Addidas FuelCell Propel V2 Running Shoes',
      imageUrl: 'assets/images/products/featured/2.png',
      priceRange: '$45.00 - $50.00',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: 'Tuma Grey',
      imageUrl: 'assets/images/products/featured/4.png',
      priceRange: '$120.00 - $150.00',
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: 'New Balance Running Shoes',
      imageUrl: 'assets/images/products/featured/3.png',
      priceRange: '$90.00 - $120.00',
      colSpan: 1,
      rowSpan: 1,
    },
  ];
  slides3 = [
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
  topBrand = [
    {
      name: 'Fusion',
      bgImage: 'fusion-bg.jpg',
      logo: 'fusion.png',
      link: '/search?brand=fusion',
    },
    {
      name: 'Sholy',
      bgImage: 'sholy-bg.jpg',
      logo: 'sholy.png',
      link: '/search?brand=sholy',
    },
    {
      name: 'Tyrant',
      bgImage: 'tyrant-bg.jpg',
      logo: 'tyrant.png',
      link: '/search?brand=tyrant',
    },
    {
      name: 'Fashadil',
      bgImage: 'fashadil-bg.jpg',
      logo: 'fashadil.png',
      link: '/search?brand=fashadil',
    },
    {
      name: 'clothingegy',
      bgImage: 'clothingegy-bg.jpg',
      logo: 'clothingegy.png',
      link: '/search?brand=clothingegy',
    },
    {
      name: 'shosio',
      bgImage: 'shosio-bg.jpg',
      logo: 'shosio.png',
      link: '/search?brand=shosio',
    },
    {
      name: 'club-shoes',
      bgImage: 'club-shoes-bg.jpg',
      logo: 'club-shoes.png',
      link: '/search?brand=club-shoes',
    },
    {
      name: 'pop-clothing',
      bgImage: 'pop-clothing-bg.jpg',
      logo: 'pop-clothing.png',
      link: '/search?brand=pop-clothing',
    },
    {
      name: 'hoppister',
      bgImage: 'hoppister-bg.jpg',
      logo: 'hoppister.png',
      link: '/search?brand=hoppister',
    },
    {
      name: 'shovia',
      bgImage: 'shovia-bg.jpg',
      logo: 'shovia.png',
      link: '/search?brand=shovia',
    },
    {
      name: 'shoozly',
      bgImage: 'shoozly-bg.jpg',
      logo: 'shoozly.png',
      link: '/search?brand=shoozly',
    },
    {
      name: 'blaze-fashion',
      bgImage: 'blaze-fashion-bg.jpg',
      logo: 'blaze-fashion.png',
      link: '/search?brand=blaze-fashion',
    },
  ];
}
