import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductData } from 'src/app/model/category-data.model';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-all-cat',
  templateUrl: './all-cat.component.html',
  styleUrls: ['./all-cat.component.css'],
})
export class AllCatComponent {
  products: Product[] = [];
  title: string = '';
  selectedProduct: any = null;
  showPopup = false;

  constructor(
    private route: ActivatedRoute,
    private productDataService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const category = data['category'] as keyof ProductData;
      this.productDataService.getProducts().subscribe((productData) => {
        this.products = productData[category] || [];
        this.title = data['title'];
      });
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
