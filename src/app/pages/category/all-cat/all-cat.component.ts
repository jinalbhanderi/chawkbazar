import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { Product } from 'src/app/model/category-data.model';

@Component({
  selector: 'app-all-cat',
  templateUrl: './all-cat.component.html',
  styleUrls: ['./all-cat.component.css'],
})
export class AllCatComponent implements OnInit {
  products: Product[] = [];
  title: string = '';
  selectedProduct: any = null;
  showPopup = false;
  hasData: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productDataService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        const categories = params['category']
          ? params['category'].split(',')
          : [];
        const brands = params['brand'] ? params['brand'].split(',') : [];

        this.productDataService.getProducts().subscribe({
          next: (productData) => {
            let filteredProducts: Product[] = [];
            const categoryProducts = categories.flatMap(
              (category: string | number) => productData[category] || []
            );
            const brandProducts = brands.flatMap((brand: string | undefined) =>
              Object.values(productData)
                .flat()
                .filter((product) => product.brand === brand)
            );

            // Combine both category and brand products
            if (categories.length && brands.length) {
              filteredProducts = categoryProducts.filter((product: { productName: any; }) =>
                brandProducts.some(
                  (brandProduct: { productName: any; }) =>
                    brandProduct.productName === product.productName
                )
              );
            } else if (categories.length) {
              filteredProducts = categoryProducts;
            } else if (brands.length) {
              filteredProducts = brandProducts;
            } else {
              filteredProducts = Object.values(productData).flat();
            }

            this.products = filteredProducts;
            this.title = this.products.length ? 'Products' : 'No Products';
            this.hasData = this.products.length > 0;
          },
          error: (err) => {
            console.error('Failed to fetch products', err);
            this.hasData = false;
          },
        });
      },
      error: (err) => {
        console.error('Failed to get query params', err);
      },
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
