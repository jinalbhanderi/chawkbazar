import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.css'],
})
export class ModernComponent {
  products = [
    {
      productName: 'Adidas Shoes Black',
      description: 'Men Black top sleeveless gown',
      imageUrl: 'assets/images/products/p-26-md.png',
      price: 45.0,
      originalPrice: 99.99,
    },
    {
      productName: 'Armani Wide-Leg Trousers',
      description:
        'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.',
      imageUrl: 'assets/images/products/p-16-md.png',
      price: 12.0,
      originalPrice: 16.0,
    },
    {
      productName: 'Zara Shoes Green',
      description:
        'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.',
      imageUrl: 'assets/images/products/p-26-md.png',
      price: 50.0,
    },
    {
      productName: 'Wayfarer Sunglasses',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      imageUrl: 'assets/images/products/p-25-md.png',
      price: 15.0,
      originalPrice: 18.0,
    },
    {
      productName: 'Tissot Classic',
      description:
        'The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement.',
      imageUrl: 'assets/images/products/p-30-md.png',
      price: 600.0,
    },
    {
      productName: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem.',
      imageUrl: 'assets/images/products/p-14-md.png',
      price: 15.0,
    },
    {
      productName: 'Polarised Wayfarer Sunglasses',
      description:
        'This item is only exchangeable for the same or a different size, if available, and cannot be returned.',
      imageUrl: 'assets/images/products/p-27-md.png',
      price: 20.0,
      originalPrice: 35.0,
    },
    {
      productName: 'Gucci Carlton UK',
      description:
        'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem.',
      imageUrl: 'assets/images/products/p-8-md.png',
      price: 14.99,
      originalPrice: 19.99,
    },
    {
      productName: 'NIKE Shoes',
      description:
        'NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.',
      imageUrl: 'assets/images/products/p-24-md.png',
      price: 50.0,
      originalPrice: 80.0,
    },
    {
      productName: 'Wayfarer Sunglasses',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      imageUrl: 'assets/images/products/p-12-md.png',
      price: 20.0,
      originalPrice: 25.0,
    },
  ];

  sellingProducts = [
    {
      productName: 'Armani Veni Vidi Vici',
      imageUrl: '/assets/images/products/p-11-xs.png',
      description:
        'Fendi began life in 1925 as a fur and leather specialty store in Rome.',
      price: '$17.99',
      previousPrice: '$20.00',
    },
    {
      productName: 'Adidas Shoes Black',
      imageUrl: '/assets/images/products/p-26-xs.png',
      description: 'Men Black top shoes gown',
      price: '$45.00',
      previousPrice: '$99.99',
    },
    {
      productName: 'Gucci Carlton UK',
      imageUrl: '/assets/images/products/p-8-xs.png',
      description:
        'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$14.99',
      previousPrice: '$19.99',
    },
    {
      productName: 'Scuba Stand Collar Topper Jacket',
      imageUrl: '/assets/images/products/p-15-xs.png',
      description:
        'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
      price: '$12.00',
      previousPrice: '$16.00',
    },
    {
      productName: 'Regular Fit Crew-neck T-shirt',
      imageUrl: '/assets/images/products/p-7-xs.png',
      description:
        'Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
    },
    {
      productName: 'Hermes  Carlton London',
      imageUrl: '/assets/images/products/p-14-xs.png',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$15.00',
      previousPrice: '',
    },
    {
      productName: 'Wayfarer Sunglasses',
      imageUrl: '/assets/images/products/p-27-xs.png',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      price: '$20.00',
      previousPrice: '$25.00',
    },
    {
      productName: 'Armani Wide-Leg Trousers',
      imageUrl: '/assets/images/products/p-16-xs.png',
      description:
        'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.',
      price: '$60.00',
      previousPrice: '$80.00',
    },
    {
      productName: 'REDQ Steel Watch',
      imageUrl: '/assets/images/products/p-16-xs.png',
      description:
        'The Black Bay celebrates 60 years of diving watches with extraordinary heritage. The iconic model inherits the general lines.',
      price: '$80.00',
      previousPrice: '$120.00',
    },
    // Add more products as needed
  ];
  Arrivalsproducts = [
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/1.jpg',

      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/2.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/3.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/4.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/5.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/6.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/7.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/8.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/9.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      productName: 'Roadster Women Round Neck',
      imageUrl: '/assets/images/products/ancient/10.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
  ];
  imageItem = [
    { imageUrl: 'assets/images/instagram/1.jpg', altText: 'Image 1' },
    { imageUrl: 'assets/images/instagram/2.jpg', altText: 'Image 2' },
    { imageUrl: 'assets/images/instagram/3.jpg', altText: 'Image 3' },
    { imageUrl: 'assets/images/instagram/4.jpg', altText: 'Image 3' },
    { imageUrl: 'assets/images/instagram/5.jpg', altText: 'Image 3' },
    { imageUrl: 'assets/images/instagram/6.jpg', altText: 'Image 3' },
    // Add more images as needed
  ];

  topBrand = [
    {
      productName: 'Fusion',
      imageUrl: 'fusion-bg.jpg',
      logo: 'fusion.png',
      link: '/search?brand=fusion',
    },
    {
      productName: 'Sholy',
      imageUrl: 'sholy-bg.jpg',
      logo: 'sholy.png',
      link: '/search?brand=sholy',
    },
    {
      productName: 'Tyrant',
      imageUrl: 'tyrant-bg.jpg',
      logo: 'tyrant.png',
      link: '/search?brand=tyrant',
    },
    {
      productName: 'Fashadil',
      imageUrl: 'fashadil-bg.jpg',
      logo: 'fashadil.png',
      link: '/search?brand=fashadil',
    },
    {
      productName: 'clothingegy',
      imageUrl: 'clothingegy-bg.jpg',
      logo: 'clothingegy.png',
      link: '/search?brand=clothingegy',
    },
    {
      productName: 'shosio',
      imageUrl: 'shosio-bg.jpg',
      logo: 'shosio.png',
      link: '/search?brand=shosio',
    },
    {
      productName: 'club-shoes',
      imageUrl: 'club-shoes-bg.jpg',
      logo: 'club-shoes.png',
      link: '/search?brand=club-shoes',
    },
    {
      productName: 'pop-clothing',
      imageUrl: 'pop-clothing-bg.jpg',
      logo: 'pop-clothing.png',
      link: '/search?brand=pop-clothing',
    },
    {
      productName: 'hoppister',
      imageUrl: 'hoppister-bg.jpg',
      logo: 'hoppister.png',
      link: '/search?brand=hoppister',
    },
    {
      productName: 'shovia',
      imageUrl: 'shovia-bg.jpg',
      logo: 'shovia.png',
      link: '/search?brand=shovia',
    },
    {
      productName: 'shoozly',
      imageUrl: 'shoozly-bg.jpg',
      logo: 'shoozly.png',
      link: '/search?brand=shoozly',
    },
    {
      productName: 'blaze-fashion',
      imageUrl: 'blaze-fashion-bg.jpg',
      logo: 'blaze-fashion.png',
      link: '/search?brand=blaze-fashion',
    },
    {
      productName: 'elegance',
      imageUrl: 'elegance-bg.jpg',
      logo: 'elegance.png',
      link: '/search?brand=elegance',
    },
    {
      productName: 'clothingtastic',
      imageUrl: 'clothingtastic-bg.jpg',
      logo: 'clothingtastic.png',
      link: '/search?brand=clothingtastic',
    },
    {
      productName: 'fashnetic',
      imageUrl: 'fashnetic-bg.jpg',
      logo: 'fashnetic.png',
      link: '/search?brand=fashnetic',
    },
    {
      productName: 'hunter-shoes',
      imageUrl: 'hunter-shoes-bg.jpg',
      logo: 'hunter-shoes.png',
      link: '/search?brand=hunter-shoes',
    },
  ];

  fProducts = [
    {
      productName: 'Nike Bag',
      imageUrl: 'assets/images/products/featured/1.png',
      discount: '20%',
      oldPrice: '$20.38',
      newPrice: '$16.38',
      description:
        'Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement',
      link: '/product/nike-bag',
    },
    {
      productName: 'Adidas Woolen Cap',
      imageUrl: 'assets/images/products/featured/2.png',
      oldPrice: '$20.00',
      newPrice: '$16.00',
      description:
        'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use.',
      link: '/product/adidas-woolen-cap',
    },
    {
      productName: 'Nike Leader VT',
      imageUrl: 'assets/images/products/featured/3.png',
      newPrice: '$16.38',
      description:
        'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment.',
      link: '/product/nike-leader-vt',
    },
    {
      productName: 'Ray ban Aviator',
      imageUrl: 'assets/images/products/featured/4.png',
      discount: '15%',
      oldPrice: '$850.00',
      newPrice: '$720.00',
      description:
        'Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces. Restore true color.',
      link: '/product/ray-ban-aviator',
    },
    {
      productName: 'Tissot Classic',
      imageUrl: 'assets/images/products/featured/5.png',
      newPrice: '$600.00',
      description:
        'The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement.',
      link: '/product/tissot-classic',
    },
  ];
  slides: any[] = [
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F33%2Fwomen.png&w=1920&q=100',
      productName: 'Women',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=1920&q=100',
      productName: 'Watch',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=1920&q=100',
      productName: 'Sunglass',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=1920&q=100',
      productName: 'Sports',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=1920&q=100',
      productName: 'Sneekers',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=1920&q=100',
      productName: 'Men',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=1920&q=100',
      productName: 'Kids',
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=1920&q=100',
      productName: 'Bags',
    },
  ];
  slides2: any[] = [
    { imageUrl: '/assets/images/banner/slider/banner-1.jpg' },
    { imageUrl: '/assets/images/banner/slider/banner-2.png' },
    { imageUrl: '/assets/images/banner/slider/banner-3.jpg' },
  ];

  // data(item: any) {
  //   debugger;
  // }
  title: string = '';
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
