import { Component } from '@angular/core';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.css'],
})
export class ModernComponent {
  products = [
    {
      title: 'Adidas Shoes Black',
      description: 'Men Black top sleeveless gown',
      image: 'assets/images/products/p-26-md.png',
      price: 45.0,
      originalPrice: 99.99,
    },
    {
      title: 'Armani Wide-Leg Trousers',
      description:
        'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.',
      image: 'assets/images/products/p-16-md.png',
      price: 12.0,
      originalPrice: 16.0,
    },
    {
      title: 'Zara Shoes Green',
      description:
        'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.',
      image: 'assets/images/products/p-26-md.png',
      price: 50.0,
    },
    {
      title: 'Wayfarer Sunglasses',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      image: 'assets/images/products/p-25-md.png',
      price: 15.0,
      originalPrice: 18.0,
    },
    {
      title: 'Tissot Classic',
      description:
        'The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement.',
      image: 'assets/images/products/p-30-md.png',
      price: 600.0,
    },
    {
      title: 'Hermes Carlton London',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem.',
      image: 'assets/images/products/p-14-md.png',
      price: 15.0,
    },
    {
      title: 'Polarised Wayfarer Sunglasses',
      description:
        'This item is only exchangeable for the same or a different size, if available, and cannot be returned.',
      image: 'assets/images/products/p-27-md.png',
      price: 20.0,
      originalPrice: 35.0,
    },
    {
      title: 'Gucci Carlton UK',
      description:
        'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem.',
      image: 'assets/images/products/p-8-md.png',
      price: 14.99,
      originalPrice: 19.99,
    },
    {
      title: 'NIKE Shoes',
      description:
        'NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.',
      image: 'assets/images/products/p-24-md.png',
      price: 50.0,
      originalPrice: 80.0,
    },
    {
      title: 'Wayfarer Sunglasses',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      image: 'assets/images/products/p-12-md.png',
      price: 20.0,
      originalPrice: 25.0,
    },
  ];

  sellingProducts = [
    {
      name: 'Armani Veni Vidi Vici',
      image: '/assets/images/products/p-11-xs.png',
      description:
        'Fendi began life in 1925 as a fur and leather specialty store in Rome.',
      price: '$17.99',
      previousPrice: '$20.00',
    },
    {
      name: 'Adidas Shoes Black',
      image: '/assets/images/products/p-26-xs.png',
      description: 'Men Black top shoes gown',
      price: '$45.00',
      previousPrice: '$99.99',
    },
    {
      name: 'Gucci Carlton UK',
      image: '/assets/images/products/p-8-xs.png',
      description:
        'Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$14.99',
      previousPrice: '$19.99',
    },
    {
      name: 'Scuba Stand Collar Topper Jacket',
      image: '/assets/images/products/p-15-xs.png',
      description:
        'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
      price: '$12.00',
      previousPrice: '$16.00',
    },
    {
      name: 'Regular Fit Crew-neck T-shirt',
      image: '/assets/images/products/p-7-xs.png',
      description:
        'Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem',
      price: '$12.30',
      previousPrice: '$16.38',
    },
    {
      name: 'Hermes  Carlton London',
      image: '/assets/images/products/p-14-xs.png',
      description:
        'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
      price: '$15.00',
      previousPrice: '',
    },
    {
      name: 'Wayfarer Sunglasses',
      image: '/assets/images/products/p-27-xs.png',
      description:
        'Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.',
      price: '$20.00',
      previousPrice: '$25.00',
    },
    {
      name: 'Armani Wide-Leg Trousers',
      image: '/assets/images/products/p-16-xs.png',
      description:
        'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.',
      price: '$60.00',
      previousPrice: '$80.00',
    },
    {
      name: 'REDQ Steel Watch',
      image: '/assets/images/products/p-16-xs.png',
      description:
        'The Black Bay celebrates 60 years of diving watches with extraordinary heritage. The iconic model inherits the general lines.',
      price: '$80.00',
      previousPrice: '$120.00',
    },
    // Add more products as needed
  ];
  Arrivalsproducts = [
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/1.jpg',

      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/2.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/3.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/4.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/5.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/6.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/7.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/8.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/9.jpg',
      description:
        'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
      price: 18.59,
    },
    {
      name: 'Roadster Women Round Neck',
      image: '/assets/images/products/ancient/10.jpg',
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
    {
      name: 'elegance',
      bgImage: 'elegance-bg.jpg',
      logo: 'elegance.png',
      link: '/search?brand=elegance',
    },
    {
      name: 'clothingtastic',
      bgImage: 'clothingtastic-bg.jpg',
      logo: 'clothingtastic.png',
      link: '/search?brand=clothingtastic',
    },
    {
      name: 'fashnetic',
      bgImage: 'fashnetic-bg.jpg',
      logo: 'fashnetic.png',
      link: '/search?brand=fashnetic',
    },
    {
      name: 'hunter-shoes',
      bgImage: 'hunter-shoes-bg.jpg',
      logo: 'hunter-shoes.png',
      link: '/search?brand=hunter-shoes',
    },
  ];

  fProducts = [
    {
      name: 'Nike Bag',
      image: '1.png',
      discount: '20%',
      oldPrice: '$20.38',
      newPrice: '$16.38',
      description:
        'Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement',
      link: '/product/nike-bag',
    },
    {
      name: 'Adidas Woolen Cap',
      image: '2.png',
      oldPrice: '$20.00',
      newPrice: '$16.00',
      description:
        'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use.',
      link: '/product/adidas-woolen-cap',
    },
    {
      name: 'Nike Leader VT',
      image: '3.png',
      newPrice: '$16.38',
      description:
        'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment.',
      link: '/product/nike-leader-vt',
    },
    {
      name: 'Ray ban Aviator',
      image: '4.png',
      discount: '15%',
      oldPrice: '$850.00',
      newPrice: '$720.00',
      description:
        'Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces. Restore true color.',
      link: '/product/ray-ban-aviator',
    },
    {
      name: 'Tissot Classic',
      image: '5.png',
      newPrice: '$600.00',
      description:
        'The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement.',
      link: '/product/tissot-classic',
    },
  ];
  slides: any[] = [
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F33%2Fwomen.png&w=1920&q=100',
      title:'Women'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=1920&q=100',
      title:'Watch'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=1920&q=100',
      title:'Sunglass'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=1920&q=100',
      title:'Sports'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=1920&q=100',
      title:'Sneekers'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=1920&q=100',
      title:'Men'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=1920&q=100',
      title:'Kids'
    },
    {
      src: 'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=1920&q=100',
      title:'Bags'
    },
  ];
  slides2: any[] = [
    { src: '/assets/images/banner/slider/banner-1.jpg', title: 'abc' },
    { src: '/assets/images/banner/slider/banner-2.png' },
    { src: '/assets/images/banner/slider/banner-3.jpg' },
  ];
}
