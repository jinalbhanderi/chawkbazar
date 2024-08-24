import { Component } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
})
export class StandardComponent {
  // slides = [
  //   {
  //     image: '/assets/images/hero/banner-1.jpg',
  //     alt: 'Slide 1',
  //     title: 'Title 1',
  //     description: 'Description 1',
  //   },
  //   {
  //     image: '/assets/images/hero/banner-2.jpg',
  //     alt: 'Slide 2',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //   },
  //   {
  //     image: '/assets/images/hero/banner-3.jpg',
  //     alt: 'Slide 3',
  //     title: 'Title 3',
  //     description: 'Description 3',
  //   },
  // ];
  products: any[] = [
    {
      name: 'Nike Black',
      description:
        'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use.',
      price: '$11.00',
      previousPrice: '$15.00',
      imageUrl: '/assets/images/products/p-1.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-2.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-3.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-4.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-5.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-6.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-7.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-8.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-9.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-10.png',
    },
  ];
  arrivalsProducts: any[] = [
    {
      name: 'Nike Black',
      description:
        'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use.',
      price: '$11.00',
      previousPrice: '$15.00',
      imageUrl: '/assets/images/products/p-1.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-2.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-3.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-4.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-5.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-6.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-7.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-8.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-9.png',
    },
    {
      name: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
      imageUrl: '/assets/images/products/p-10.png',
    },
  ];

  slides: any[] = [
    { src: '/assets/images/hero/banner-1.jpg' },
    { src: '/assets/images/hero/banner-2.jpg' },
    { src: '/assets/images/hero/banner-3.jpg' },
  ];
  slides2: any[] = [
    { src: '/assets/images/banner/small/banner-1.jpg' },
    { src: '/assets/images/banner/small/banner-2.jpg' },
    { src: '/assets/images/banner/small/banner-3.jpg' },
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

  collectionItems = [
    {
      title: 'New Spring Knits',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/1.jpg',
      link: '/search',
    },
    {
      title: 'Down To The Core',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/2.jpg',
      link: '/search',
    },
    {
      title: 'New Winter Knits',
      description:
        'Endlessly versatile new styles that say yes to spring. The season’s looking bright.',
      image: '/assets/images/collection/3.jpg',
      link: '/search',
    },
  ];
  featureItems = [
    {
      title: 'Guaranteed Savings',
      description:
        'If you don’t make your membership fee in savings, we’ll refund the difference',
      image: '/assets/images/feature/saving.svg',
    },
    {
      title: 'Try it risk-free',
      description:
        'If you don’t make your membership fee in savings, we’ll refund the difference',
      image: '/assets/images/feature/risk-free.svg',
    },
    {
      title: 'Super Fast Delivery',
      description:
        'If you don’t make your membership fee in savings, we’ll refund the difference',
      image: '/assets/images/feature/delivery.svg',
    },
    {
      title: '1000+ products priced at cost',
      description:
        'If you don’t make your membership fee in savings, we’ll refund the difference',
      image: '/assets/images/feature/product.svg',
    },
  ];
}
