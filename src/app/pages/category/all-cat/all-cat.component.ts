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
    this.route.queryParams.subscribe((params) => {
      const categories = params['category']
        ? params['category'].split(',')
        : [];
      if (categories.length) {
        this.productDataService.getProducts().subscribe((productData) => {
          this.products = categories.flatMap(
            (category: string | number) => productData[category] || []
          );
          this.title = 'Products';
        });
      } else {
        this.products = [];
        this.title = 'No Products';
      }
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
