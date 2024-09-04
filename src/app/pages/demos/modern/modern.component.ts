import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.css'],
})
export class ModernComponent {
  products: any[] = [];
  sellingProducts: any[] = [];
  Arrivalsproducts: any[] = [];
  imageItem: any[] = [];
  topBrand: any[] = [];
  fProducts: any[] = [];
  slides: any[] = [];
  slides2: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private modernService: ModernService) {}

  ngOnInit(): void {
    this.modernService.getProducts().subscribe((data) => {
      this.products = data.products;
      this.sellingProducts = data.sellingProducts;
      this.Arrivalsproducts = data.Arrivalsproducts;
      this.imageItem = data.imageItem;
      this.topBrand = data.topBrand;
      this.fProducts = data.fProducts;
      this.slides = data.slides;
      this.slides2 = data.slides2;
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
