import { Component } from '@angular/core';

@Component({
  selector: 'app-shpos',
  templateUrl: './shpos.component.html',
  styleUrls: ['./shpos.component.css'],
})
export class ShposComponent {
  shops = [
    {
      name: 'Marny Rose',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/328/conversions/logo01-thumbnail.jpg',
      description:
        'Quis eligendi aliqua, Ut rerum necessitati, Laboris voluptatibus, 25196, Quae qui dolore ea s',
      link: '/shops/cozy-couture-corner',
    },
    {
      name: 'Drake Cain',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/343/conversions/logo5-thumbnail.jpg',
      description:
        'Voluptatem deleniti, Odio aut ea neque re, Voluptatem amet po, 22395, Occaecat ut excepteu',
      link: '/shops/quirk-and-charm-boutique',
    },
    {
      name: 'Claire Miranda',
      logoUrl:
        'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1613/conversions/Publisher-logo-thumbnail.jpg',
      description:
        'Eum quisquam irure m, Nobis et asperiores, Et eveniet omnis ad, 72091, Officiis consectetur',
      link: '/shops/denim-delight-co',
    },
    {
      name: 'Urban Threads Emporium',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/15/conversions/fashion-thumbnail.jpg',
      description: '4360 Hampton Meadows, Massachusetts, Boston, 02210, USA',
      link: '/shops/urban-threads-emporium',
    },
    {
      name: 'Blythe Knowles',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/333/conversions/logo04-thumbnail.jpg',
      description:
        'Qui vel non sunt as, Voluptas natus et re, Nisi esse voluptate, 50848, Expedita tempora occ',
      link: '/shops/chic-haven-boutique',
    },
    {
      name: 'Giselle Vega',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/346/conversions/logo06-thumbnail.jpg',
      description:
        'Temporibus reiciendis, Dolore exercitationem ad, Quasi placeat aliquam, 38235, Nostrum aliquam acc',
      link: '/shops/fashion-fantasy',
    },
    {
      name: 'Brenda Kline',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/342/conversions/logo03-thumbnail.jpg',
      description:
        'Cupiditate deserunt id, Consectetur ratione et, Voluptas error non, 16580, Excepteur mollitia aut',
      link: '/shops/stylish-studio',
    },
    {
      name: 'Landon Curtis',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/328/conversions/logo01-thumbnail.jpg',
      description:
        'Non dolorem velit, Ullam exercitationem sint, Amet libero earum, 90210, Doloribus eius sapiente',
      link: '/shops/luxury-loft',
    },
    {
      name: 'Nina Harper',
      logoUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/331/conversions/logo02-thumbnail.jpg',
      description:
        'Quod quaerat nam, Reprehenderit provident, Ut tempora non, 77889, Laborum soluta explicabo',
      link: '/shops/modern-chic',
    },
  ];
}
