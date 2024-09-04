import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css'],
})
export class FashionComponent {
  slides: any[] = [];
  slides2: any[] = [];
  slides3: any[] = [];
  slides4: any[] = [];
  products: any[] = [];
  sproducts: any[] = [];
  topBrand: any[] = [];
  items: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getfashionProducts().subscribe((data) => {
      this.slides = data.slides;
      this.slides2 = data.slides2;
      this.slides3 = data.slides3;
      this.slides4 = data.slides4;
      this.products = data.products;
      this.sproducts = data.sproducts;
      this.topBrand = data.topBrand;
      this.items = data.items;
    });
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }

  openPopup(product: any): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }
}

