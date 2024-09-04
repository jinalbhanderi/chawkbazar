import { Component } from '@angular/core';
import { ModernService } from 'src/app/service/modern.service';

@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.css'],
})
export class MinimalComponent {


  categories: any[] = [];
  images: Array<{ src: string; alt: string; link: string }> = [];
  products: any[] = [];
  items: any[] = [];
  slides3: any[] = [];
  slides4: any[] = [];
  collectionItems: any[] = [];

  selectedProduct: any = null;
  showPopup = false;

  constructor(private dataService: ModernService) {}

  ngOnInit(): void {
    this.dataService.getMinimalProducts().subscribe((data) => {
      this.categories = data.categories;
      this.images = data.images;
      this.products = data.products;
      this.items = data.items;
      this.slides3 = data.slides3;
      this.slides4 = data.slides4;
      this.collectionItems = data.collectionItems;
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
