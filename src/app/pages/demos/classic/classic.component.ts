import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css'],
})
export class ClassicComponent {

  slides2: any[] = [];
  slides3: any[] = [];
  products: any[] = [];
  images: any[] = [];
  flashSale: any[] = [];
  topBrand: any[] = [];
  items: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getClassicProducts().subscribe((data) => {
      this.slides2 = data.slides2;
      this.slides3 = data.slides3;
      this.products = data.products;
      this.images = data.images;
      this.flashSale = data.flashSale;
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
