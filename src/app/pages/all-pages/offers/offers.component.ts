import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  coupons = [
    {
      code: 'EID2',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/246/conversions/2x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: '4OFF',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/247/conversions/4x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'RAMADAN5',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/248/conversions/5x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: '6OFF',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/249/conversions/6x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'SUMMER8',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/250/conversions/8x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'WINTER10',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/251/conversions/10x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: '12OFF',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/252/conversions/12x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'SUMMER15',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/253/conversions/15x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'BLACKFRIDAY',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/254/conversions/18x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'NEWYEARSALE',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/255/conversions/20x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: '20OFF',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/255/conversions/20x2x-thumbnail-thumbnail.jpg',
    },
    {
      code: 'CHRISTMAS18',
      imageUrl:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/254/conversions/18x2x-thumbnail-thumbnail.jpg',
    },
  ];
}
