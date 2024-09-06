import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Product {
  imageUrl: string;
  productName: string;
  newprice:string;
  oldprice:string;
}

interface ProductData {
  [key: string]: Product[];
}

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css'],
})
export class OnSaleComponent {
  products: Product[] = [];
  title: string = '';
  selectedProduct: any = null;
  showPopup = false;
  private productData: ProductData = {
    'new-sports': [
      {
        productName: 'Zara Miss Chase',
        imageUrl:
          'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/234/Chawkbazar1.png',
        newprice: '$90.00',
        oldprice: '$100.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/1.webp',
        productName: 'Nike Aviator',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/sunglass/3.webp',
        productName: 'Hermes179S Sunglasses',
        newprice: '$220.00',
        oldprice: '$250',
      },
      {
        imageUrl: 'assets/images/category/sneakers/2.webp',
        productName: 'Armani Retaliate Shoes',
        newprice: '$100.00',
        oldprice: '$120',
      },
      {
        imageUrl: 'assets/images/category/men/10.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$220.00',
        oldprice: '$250',
      },
      {
        imageUrl: 'assets/images/category/men/12.webp',
        productName: 'Parmani Submariner',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/watch/6.webp',
        productName: 'Pissot Super Dry',
        newprice: '$220.00',
        oldprice: '$260',
      },
      {
        imageUrl: 'assets/images/category/sports/13.webp',
        productName: 'Dido Pilot Glass',
        newprice: '$950.00',
        oldprice: '$1,150.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/5.webp',
        productName: 'Pike Green Thunder',
        newprice: '$950.00',
        oldprice: '$1500.00',
      },
      // Add more sports products here
    ],
    'exclusive-sunglasses': [
      {
        productName: 'Reyban Havana Phantos Sunglasses',
        imageUrl: 'assets/images/category/sunglass/1.webp',
        newprice: '$80.00',
        oldprice: '$100',
      },
      {
        imageUrl: 'assets/images/category/men/18.webp',
        productName: 'Tay Ben Aviator',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/sports/13.webp',
        productName: 'Dido Pilot Glass',
        newprice: '$950.00',
        oldprice: '$1,150',
      },
    ],
    'product-coupons': [
      {
        imageUrl: 'assets/images/category/sports/9.webp',
        productName: 'Black Crew V neck Tops',
        newprice: '$950.00',
        oldprice: '$1,150.00',
      },
      {
        imageUrl: 'assets/images/category/women/21.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/watch/7.webp',
        productName: 'Tippot Classic',
        newprice: '$210.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/26.webp',
        productName: 'Levi Blue top',
        newprice: '$220.00',
        oldprice: '$255.00',
      },
    ],
    'new-backpack': [
      {
        productName: 'Philip Lim Leather Shoulder Bag',
        imageUrl: 'assets/images/category/bags/1.webp',
        newprice: '$250.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/bags/1.webp',
        productName: 'Philip Lim Leather Shoulder Bag',
        newprice: '$220.00 ',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/bags/2.webp',
        productName: 'Mac Nordace Laptop Bag',
        newprice: '$100.00',
        oldprice: '$120.00',
      },
      {
        imageUrl: 'assets/images/category/bags/3.webp',
        productName: 'Givenchy Shoulder Bag',
        newprice: '$75.00 ',
        oldprice: '$90.00',
      },
      {
        imageUrl: 'assets/images/category/bags/4.webp',
        productName: 'Chanel Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$90.00',
      },
      {
        imageUrl: 'assets/images/category/bags/5.webp',
        productName: 'Alex Maqueeen Shoulder Bag',
        newprice: '$950.00',
        oldprice: '$1,150.00',
      },
      {
        imageUrl: 'assets/images/category/bags/6.webp',
        productName: 'Chevis Womens Bag',
        newprice: '$220.00',
        oldprice: '$400.00',
      },
      {
        imageUrl: 'assets/images/category/bags/7.webp',
        productName: 'Tuma Kidsa bag',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/bags/8.webp',
        productName: 'Zara Army Bag',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
    ],
    'womens-collection': [
      {
        imageUrl: 'assets/images/category/women/1.webp',
        productName: 'Zara Miss Chase',
        newprice: '$220.00',
        oldprice: '$225.00',
      },
      {
        imageUrl: 'assets/images/category/women/2.webp',
        productName: 'White Oxford Shirt',
        newprice: '$100.00',
        oldprice: '$130.00',
      },
      {
        imageUrl: 'assets/images/category/women/3.webp',
        productName: 'Roadster Women Round Neck',
        newprice: '$75.00',
        oldprice: '$90.00',
      },
      {
        imageUrl: 'assets/images/category/women/4.webp',
        productName: 'Nike Pro Mesh Top with Leggins',
        newprice: '$75.00',
        oldprice: '$85.00',
      },
      {
        imageUrl: 'assets/images/category/women/5.webp',
        productName: 'Nike Comfy Vapor Maxpro',
        newprice: '$950.00',
        oldprice: '$1500.00',
      },
      {
        imageUrl: 'assets/images/category/women/6.webp',
        productName: 'Louise Vuitton Highlander',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/7.webp',
        productName: 'Hermes Carlton London',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/8.webp',
        productName: 'H & Dri-FIT Fleece',
        newprice: '$220.00',
        oldprice: '$233.00',
      },
      {
        imageUrl: 'assets/images/category/women/9.webp',
        productName: 'Gucci Challenger',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/10.webp',
        productName: 'Armani 269S Sunglasses',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/11.webp',
        productName: 'Armani Retaliate Shoes',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/12.webp',
        productName: 'Alex Maqueeen Shoulder Bag',
        newprice: '$220.00',
        oldprice: '$240.00',
      },
      {
        imageUrl: 'assets/images/category/women/13.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$220.00',
        oldprice: '$320.00',
      },
      {
        imageUrl: 'assets/images/category/women/14.webp',
        productName: 'Chevis Womens Bag',
        newprice: '$220.00',
        oldprice: '$233.00',
      },
      {
        imageUrl: 'assets/images/category/women/15.webp',
        productName: 'Funder Armor Yellow Tops',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/16.webp',
        productName: 'Black Crew V neck Tops',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/women/17.webp',
        productName: 'Parmani Submariner',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/18.webp',
        productName: 'Neutral Scoop Neck Top',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/19.webp',
        productName: 'Pissot Super Dry',
        newprice: '$220.00',
        oldprice: '$320.00',
      },
      {
        imageUrl: 'assets/images/category/women/20.webp',
        productName: 'Tay Ben Aviator',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/21.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/women/22.webp',
        productName: 'Pior Womes Bangles',
        newprice: '$220.00',
        oldprice: '$235.00',
      },
      {
        imageUrl: 'assets/images/category/women/23.webp',
        productName: 'P & M Tokyo Talkies',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/24.webp',
        productName: 'Darmani Woolen Comfort',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/25.webp',
        productName: 'Hopister Yellow',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/women/26.webp',
        productName: 'Levi Blue top',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/27.webp',
        productName: 'Hoppister Tops',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
    ],
    'mens-collection': [
      {
        productName: 'The Horse Original',
        imageUrl: 'assets/images/category/watch/1.webp',
        newprice: '$190.00',
        oldprice: '$200.00',
      },
      {
        productName: 'Nike Car Wheel Watch',
        imageUrl: 'assets/images/category/watch/2.webp',
        newprice: '$230.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/2.webp',
        productName: 'Nike Black',
        newprice: '$100.00',
        oldprice: '$200.00',
      },
      {
        imageUrl: 'assets/images/category/men/3.webp',
        productName: 'Louise Vutton Pure Black Shirt',
        newprice: '$75.00',
        oldprice: '$100.00',
      },
      {
        imageUrl: 'assets/images/category/sports/2.webp',
        productName: 'Louise Vutton Feel the Air',
        newprice: '$100.00',
        oldprice: '$150.00',
      },
      {
        imageUrl: '/assets/images/products/sel-product/1.webp',
        productName: 'Hermes Galaxy Watch 3',
        newprice: '$2,996.00',
        oldprice: '$3,200.00',
      },
      {
        imageUrl: 'assets/images/category/sports/3.webp',
        productName: 'Converse Blazing Black',
        newprice: '$75.00',
        oldprice: '$85.00',
      },
      {
        imageUrl: 'assets/images/category/men/7.webp',
        productName: 'Armani 269S Sunglasses',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/3.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$75.00',
        oldprice: '$98.00',
      },
      {
        imageUrl: 'assets/images/category/men/11.webp',
        productName: 'Pk Warm Stripes',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/watch/4.webp',
        productName: 'Parmani Submariner',
        newprice: '$75.00',
        oldprice: '$58.00',
      },
      {
        imageUrl: 'assets/images/category/men/13.webp',
        productName: 'Pucchi Fasion watch',
        newprice: '$220.00',
        oldprice: '$225.00',
      },
      {
        imageUrl: 'assets/images/category/men/14.webp',
        productName: 'Vittione Highlander',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/15.webp',
        productName: 'Paddidas Grey T shirt',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/men/16.webp',
        productName: 'Tuma Grey',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/men/18.webp',
        productName: 'Tay Ben Aviator',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/watch/7.webp',
        productName: 'Tippot Classic',
        newprice: '$210.00',
        oldprice: '$233.00',
      },
      {
        imageUrl: 'assets/images/category/sports/13.webp',
        productName: 'Dido Pilot Glass',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
    ],
    'flash-sale': [
      {
        imageUrl: 'assets/images/category/bags/7.webp',
        productName: 'Tuma Kidsa bag',
        newprice: '$220.00',
        oldprice: '$240.00',
      },
      {
        imageUrl: 'assets/images/category/bags/8.webp',
        productName: 'Zara Army Bag',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/18.webp',
        productName: 'Tay Ben Aviator',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/19.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/22.webp',
        productName: 'Pior Womes Bangles',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/23.webp',
        productName: 'P & M Tokyo Talkies',
        newprice: '$220.00',
        oldprice: '$225.00',
      },
      {
        imageUrl: 'assets/images/category/women/24.webp',
        productName: 'Darmani Woolen Comfort',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/watch/7.webp',
        productName: 'Tippot Classic',
        newprice: '$210.00',
        oldprice: '$235.00',
      },
      {
        imageUrl: 'assets/images/category/women/25.webp',
        productName: 'Hopister Yellow',
        newprice: '$220.00',
        oldprice: '$225.00',
      },
      {
        imageUrl: 'assets/images/category/sports/13.webp',
        productName: 'Dido Pilot Glass',
        newprice: '$950.00',
        oldprice: '$1120.00',
      },
      {
        imageUrl: 'assets/images/category/women/26.webp',
        productName: 'Levi Blue top',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
    ],
    'featured-products': [
      {
        imageUrl: 'assets/images/category/sports/1.webp',
        productName: 'Nike Comfy Vapor Maxpro',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/men/10.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/men/16.webp',
        productName: 'Tuma Grey',
        newprice: '$220.00',
        oldprice: '$235.00',
      },
      {
        imageUrl: 'assets/images/category/watch/6.webp',
        productName: 'Pissot Super Dry',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/bags/8.webp',
        productName: 'Zara Army Bag',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/18.webp',
        productName: 'Tay Ben Aviator',
        newprice: '$220.00',
        oldprice: '$400.00',
      },
      {
        imageUrl: 'assets/images/category/women/21.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$320.00',
      },
      {
        imageUrl: 'assets/images/category/women/22.webp',
        productName: 'Pior Womes Bangles',
        newprice: '$220.00',
        oldprice: '$320.00',
      },
    ],
    'kids-collection': [
      {
        productName: 'Zara Monte Carlo',
        imageUrl:
          'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
        newprice: '$80.00',
        oldprice: '$100',
      },
      {
        imageUrl: '/assets/images/products/sel-product/3.webp',
        productName: 'H&M Boys Top',
        newprice: '$350.00',
        oldprice: '$450.00',
      },
      {
        imageUrl: '/assets/images/products/sel-product/9.webp',
        productName: 'Armani Checked Shirt',
        newprice: '$500.00',
        oldprice: '$550.00',
      },
      {
        imageUrl: 'assets/images/category/bags/7.webp',
        productName: 'Tuma Kidsa bag',
        newprice: '$220.00',
        oldprice: '$320.00',
      },
      {
        imageUrl: 'assets/images/category/sports/13.webp',
        productName: 'Dido Pilot Glass',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
    ],
    'winter-collection': [
      {
        imageUrl: 'assets/images/category/sports/1.webp',
        productName: 'Nike Comfy Vapor Maxpro',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/1.webp',
        productName: 'Nike Aviator',
        newprice: '$220.00',
        oldprice: '$250',
      },
      {
        imageUrl: 'assets/images/category/bags/2.webp',
        productName: 'Mac Nordace Laptop Bag',
        newprice: '$100.00',
        oldprice: '$150.00',
      },
      {
        imageUrl: 'assets/images/category/sports/2.webp',
        productName: 'Louise Vutton Feel the Air',
        newprice: '$100.00',
        oldprice: '$150.00',
      },
      {
        imageUrl: 'assets/images/category/men/5.webp',
        productName: 'Hipster Hexagonal Polarized Sunglasses',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
      {
        imageUrl: 'assets/images/category/sunglass/3.webp',
        productName: 'Hermes179S Sunglasses',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/bags/3.webp',
        productName: 'Givenchy Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$85.00',
      },
      {
        imageUrl: 'assets/images/category/sports/3.webp',
        productName: 'Converse Blazing Black',
        newprice: '$75.00',
        oldprice: '$90.00',
      },
      {
        imageUrl: 'assets/images/category/bags/4.webp',
        productName: 'Chanel Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$90.00',
      },
      {
        imageUrl: 'assets/images/category/women/10.webp',
        productName: 'Armani 269S Sunglasses',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/2.webp',
        productName: 'Armani Retaliate Shoes',
        newprice: '$100.00',
        oldprice: '$200.00',
      },
      {
        imageUrl: 'assets/images/category/bags/5.webp',
        productName: 'Alex Maqueeen Shoulder Bag',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
      {
        imageUrl: 'assets/images/category/men/10.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/bags/6.webp',
        productName: 'Chevis Womens Bag',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/15.webp',
        productName: 'Funder Armor Yellow Tops',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/11.webp',
        productName: 'Pk Warm Stripes',
        newprice: '$220.00',
        oldprice: '$240.00',
      },
      {
        imageUrl: 'assets/images/category/men/12.webp',
        productName: 'Parmani Submariner',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/women/18.webp',
        productName: 'Neutral Scoop Neck Top',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/men/16.webp',
        productName: 'Tuma Grey',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/21.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/22.webp',
        productName: 'Pior Womes Bangles',
        newprice: '$220.00',
        oldprice: '$256.00',
      },
      {
        imageUrl: 'assets/images/category/women/25.webp',
        productName: 'Hopister Yellow',
        newprice: '$220.00',
        oldprice: '$234.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/5.webp',
        productName: 'Pike Green Thunder',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
    ],
    'gift-collection': [
      {
        productName: 'Zara Monte Carlo',
        imageUrl:
          'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/236/kids-1.jpg',
        newprice: '$80.00',
        oldprice: '$1000.00',
      },
      {
        imageUrl: 'assets/images/category/women/2.webp',
        productName: 'White Oxford Shirt',
        newprice: '$100.00',
        oldprice: '$123.00',
      },
      {
        imageUrl: 'assets/images/category/women/3.webp',
        productName: 'Roadster Women Round Neck',
        newprice: '$75.00',
        oldprice: '$85.00',
      },
      {
        imageUrl: 'assets/images/category/women/4.webp',
        productName: 'Nike Pro Mesh Top with Leggins',
        newprice: '$75.00',
        oldprice: '$85.00',
      },
      {
        imageUrl: 'assets/images/category/women/5.webp',
        productName: 'Nike Comfy Vapor Maxpro',
        newprice: '$950.00',
        oldprice: '$',
      },
      {
        imageUrl: 'assets/images/category/men/2.webp',
        productName: 'Nike Black',
        newprice: '$100.00',
        oldprice: '$120.00',
      },
      {
        imageUrl:
          'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2FChawkbazar17.png&w=1920&q=100',
        productName: 'Maniac Red Boys',
        newprice: '$100.00',
        oldprice: '$130.00',
      },
      {
        imageUrl: 'assets/images/category/men/3.webp',
        productName: 'Louise Vutton Pure Black Shirt',
        newprice: '$75.00',
        oldprice: '$86.00',
      },
      {
        imageUrl: 'assets/images/category/men/5.webp',
        productName: 'Hipster Hexagonal Polarized Sunglasses',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
      {
        imageUrl: 'assets/images/category/women/7.webp',
        productName: 'Hermes Carlton London',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/bags/3.webp',
        productName: 'Givenchy Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$.89.00',
      },
      {
        imageUrl: '/assets/images/products/sel-product/9.webp',
        productName: 'Armani Checked Shirt',
        newprice: '$500.00',
        oldprice: '$600.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/2.webp',
        productName: 'Armani Retaliate Shoes',
        newprice: '$100.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/3.webp',
        productName: 'Addidas FuelCell Propel V2 Running Shoes',
        newprice: '$75.00',
        oldprice: '$100.00',
      },
      {
        imageUrl: 'assets/images/category/women/15.webp',
        productName: 'Funder Armor Yellow Tops',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/men/11.webp',
        productName: 'Pk Warm Stripes',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/sports/9.webp',
        productName: 'Black Crew V neck Tops',
        newprice: '$950.00',
        oldprice: '$1100.00',
      },
      {
        imageUrl: 'assets/images/category/men/13.webp',
        productName: 'Pucchi Fasion watch',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/men/15.webp',
        productName: 'Paddidas Grey T shirt',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/18.webp',
        productName: 'Neutral Scoop Neck Top',
        newprice: '$220.00',
        oldprice: '$230.00',
      },
      {
        imageUrl: 'assets/images/category/women/23.webp',
        productName: 'P & M Tokyo Talkies',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: 'assets/images/category/women/25.webp',
        productName: 'Hopister Yellow',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/sneakers/5.webp',
        productName: 'Pike Green Thunder',
        newprice: '$950.00',
        oldprice: '$1000.00',
      },
      {
        imageUrl: 'assets/images/category/women/27.webp',
        productName: 'Hoppister Tops',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
    ],
    'winter-offer': [
      {
        imageUrl: 'assets/images/category/women/6.webp',
        productName: 'Louise Vuitton Highlander',
        newprice: '$220.00',
        oldprice: '$440.00',
      },
      {
        imageUrl:
          'https://chawkbazar.redq.io/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F202%2Fkids-17.jpg&w=1920&q=100',
        productName: 'Hermes Grey',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/21.webp',
        productName: 'Tuma Style Cap',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/24.webp',
        productName: 'Darmani Woolen Comfort',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/women/27.webp',
        productName: 'Hoppister Tops',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
    ],
    'on-sale': [
      {
        imageUrl: '/assets/images/products/sel-product/1.webp',
        productName: 'Hermes Galaxy Watch 3',
        newprice: '$2,996.00',
        oldprice: '$3,200.00',
      },
      {
        imageUrl: 'assets/images/category/women/7.webp',
        productName: 'Hermes Carlton London',
        newprice: '$220.00',
        oldprice: '$260.00',
      },
      {
        imageUrl: '/assets/images/products/sel-product/3.webp',
        productName: 'H&M Boys Top',
        newprice: '$350.00',
        oldprice: '$600.00',
      },
      {
        imageUrl: 'assets/images/category/women/8.webp',
        productName: 'H & Dri-FIT Fleece',
        newprice: '$220.00',
        oldprice: '$300.00',
      },
      {
        imageUrl: 'assets/images/category/women/9.webp',
        productName: 'Gucci Challenger',
        newprice: '$220.00',
        oldprice: '$250.00',
      },
      {
        imageUrl: 'assets/images/category/bags/3.webp',
        productName: 'Givenchy Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$120.00',
      },
      {
        imageUrl: 'assets/images/category/sports/3.webp',
        productName: 'Converse Blazing Black',
        newprice: '$75.00',
        oldprice: '$120.00',
      },
      {
        imageUrl: 'assets/images/category/bags/4.webp',
        productName: 'Chanel Shoulder Bag',
        newprice: '$75.00',
        oldprice: '$123.00',
      },
      {
        imageUrl: '/assets/images/products/sel-product/9.webp',
        productName: 'Armani Checked Shirt',
        newprice: '$500.00',
        oldprice: '$900.00',
      },
      {
        imageUrl: 'assets/images/category/women/10.webp',
        productName: 'Armani 269S Sunglasses',
        newprice: '$220.00',
        oldprice: '$800.00',
      },
      {
        imageUrl: 'assets/images/category/bags/5.webp',
        productName: 'Alex Maqueeen Shoulder Bag',
        newprice: '$950.00',
        oldprice: '$1,100',
      },
      {
        imageUrl: 'assets/images/category/bags/6.webp',
        productName: 'Chevis Womens Bag',
        newprice: '$220.00',
        oldprice: '$500',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const category = data['category'] as keyof ProductData; // Explicitly type the category
      this.products = this.productData[category] || [];
      this.title = data['title'];
    });
  }

  openPopup(product: any): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }
}
