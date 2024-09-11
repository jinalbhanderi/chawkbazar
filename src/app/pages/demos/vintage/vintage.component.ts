import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-vintage',
  templateUrl: './vintage.component.html',
  styleUrls: ['./vintage.component.css'],
})
export class VintageComponent {
  categories: any[] = [];
  slides2: any[] = [];
  slides3: any[] = [];
  slides4: any[] = [];
  slides5: any[] = [];
  items: any[] = [];
  images: any[] = [];
  products: any[] = [];
  flashSale: any[] = [];
  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getVintageProducts().subscribe((data) => {
      this.categories = data.categories;
      this.slides2 = data.slides2;
      this.slides3 = data.slides3;
      this.slides4 = data.slides4;
      this.slides5 = data.slides5;
      this.items = data.items;
      this.images = data.images;
      this.products = data.products;
      this.flashSale = data.flashSale;
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
