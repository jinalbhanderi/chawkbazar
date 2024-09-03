import { Component } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css'],
})
export class ClassicComponent {
  slides3: any[] = [
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F29%2Fsneekers.png&w=1920&q=100',
      link: '/category/sneakers',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F32%2Fwatch.png&w=1920&q=100',
      link: '/category/watch',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F31%2Fsunglass.png&w=1920&q=100',
      link: '/category/sunglass',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F30%2Fsports.png&w=1920&q=100',
      link: '/category/sports',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F28%2Fmen.png&w=1920&q=100',
      link: '/category/men',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F27%2Fkids.png&w=1920&q=100',
      link: '/category/kids',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F26%2Fbags.png&w=1920&q=100',
      link: '/category/bags',
    },
    {
      imageUrl:
        'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F33%2Fwomen.png&w=1920&q=100',
      link: '/category/women',
    },
  ];
  products = [
    {
    productName: 'Nike Comfy Vapor Maxpro',
      imageUrl: 'assets/images/products/featured/1.png',
      priceRange: '$220.00 - $250.00',
      colSpan: 2,
      rowSpan: 1,
    },
    {
    productName: 'Addidas FuelCell Propel V2 Running Shoes',
      imageUrl: 'assets/images/products/featured/2.png',
      priceRange: '$45.00 - $50.00',
      colSpan: 2,
      rowSpan: 2,
    },
    {
    productName: 'Tuma Grey',
      imageUrl: 'assets/images/products/featured/3.png',
      priceRange: '$120.00 - $150.00',
      colSpan: 2,
      rowSpan: 1,
    },
    {
    productName: 'New Balance Running Shoes',
      imageUrl: 'assets/images/products/featured/4.png',
      priceRange: '$90.00 - $120.00',
      colSpan: 1,
      rowSpan: 1,
    },
    {
    productName: 'Puma Sportswear',
      imageUrl: 'assets/images/products/featured/5.png',
      priceRange: '$60.00 - $80.00',
      colSpan: 1,
      rowSpan: 1,
    },
  ];
  images = [
    {
    imageUrl: '/assets/images/products/sel-product/1.webp',
      alt: 'Hermes Galaxy Watch 3',
    productName: 'Hermes Galaxy Watch 3',
      price: '$2,996.00',
      originalPrice: '$3,200.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/2.webp',
      alt: 'Hermes Carlton London',
    productName: 'Hermes Carlton London',
      price: '$300.00',
      originalPrice: '$650.00',
    },
      {
      imageUrl: '/assets/images/products/sel-product/3.webp',
        alt: 'H&M Boys Top',
      productName: 'H&M Boys Top',
        price: '$350.00',
        originalPrice: '$1,000.00',
      },
    {
    imageUrl: '/assets/images/products/sel-product/4.webp',
      alt: 'H & Dri-FIT Fleece',
    productName: 'H & Dri-FIT Fleece',
      price: '$550.00',
      originalPrice: '$750.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/5.webp',
      alt: 'Gucci Challenger',
    productName: 'Gucci Challenger',
      price: '$899.00',
      originalPrice: '$1,000.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/6.webp',
      alt: 'Givenchy Shoulder Bag',
    productName: 'Givenchy Shoulder Bag',
      price: '$1,450.00',
      originalPrice: '$1,500.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/7.webp',
      alt: 'Converse Blazing Black',
    productName: 'Converse Blazing Black',
      price: '$1,800.00',
      originalPrice: '$5,000.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/8.webp',
      alt: 'Chanel Shoulder Bag',
    productName: 'Chanel Shoulder Bag',
      price: '$1,300.00',
      originalPrice: '$1,500.00',
    },
    {
    imageUrl: '/assets/images/products/sel-product/9.webp',
      alt: 'Armani Checked Shirt',
    productName: 'Armani Checked Shirt',
      price: '$500.00',
      originalPrice: '$900.00',
    },
  ];
  slides2: any[] = [
    {imageUrl: '/assets/images/banner/slider/banner-1.jpg', title: 'abc' },
    {imageUrl: '/assets/images/banner/slider/banner-2.png' },
    {imageUrl: '/assets/images/banner/slider/banner-3.jpg' },
  ];
  flashSale = [
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
