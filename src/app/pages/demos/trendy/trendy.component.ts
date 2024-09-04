import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-trendy',
  templateUrl: './trendy.component.html',
  styleUrls: ['./trendy.component.css'],
})
export class TrendyComponent {


  slides: any[] = [];
  slides2: any[] = [];
  slides3: any[] = [];
  products: any[] = [];
  items: any[] = [];
  topBrand: any[] = [];
  sellingProduct: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.gettrendyProducts().subscribe((data) => {
      this.products = data.products;
      this.slides = data.slides;
      this.slides2 = data.slides2;
      this.slides3 = data.slides3;
      this.items = data.items;
      this.topBrand = data.topBrand;
      this.sellingProduct = data.sellingProduct;
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
