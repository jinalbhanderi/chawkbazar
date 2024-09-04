import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-refined',
  templateUrl: './refined.component.html',
  styleUrls: ['./refined.component.css'],
})
export class RefinedComponent {
  categories: any[] = [];
  images: any[] = [];
  slides3: any[] = [];
  slides2: any[] = [];
  fimages: any[] = [];
  items: any[] = [];
  slides: any[] = [];
  topProducts: any[] = [];
  products: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getrefinedProducts().subscribe((data) => {
      this.categories = data.categories;
      this.images = data.images;
      this.slides3 = data.slides3;
      this.slides2 = data.slides2;
      this.fimages = data.fimages;
      this.items = data.items;
      this.slides = data.slides;
      this.topProducts = data.topProducts;
      this.products = data.products;
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
