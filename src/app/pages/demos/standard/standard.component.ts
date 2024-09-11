import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
})
export class StandardComponent {
  products: any[] = [];
  arrivalsProducts: any[] = [];
  slides: any[] = [];
  slides1: any[] = [];
  slides2: any[] = [];
  slides3: any[] = [];
  collectionItems: any[] = [];
  featureItems: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getStandardProducts().subscribe((data) => {
      this.products = data.products;
      this.arrivalsProducts = data.arrivalsProducts;
      this.slides = data.slides;
      this.slides2 = data.slides2;
      this.slides3 = data.slides3;
      this.slides1 = data.slides1;
      this.collectionItems = data.collectionItems;
      this.featureItems = data.featureItems;
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
