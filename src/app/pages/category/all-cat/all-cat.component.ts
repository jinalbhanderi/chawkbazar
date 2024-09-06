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
        const sizes = params['size'] ? params['size'].split(',') : [];

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
            const sizeProducts = sizes.flatMap((size: string | undefined) =>
              Object.values(productData)
                .flat()
                .filter((product) => product.variations === size)
            );

            // Combine filters: category, brand, size
            if (categories.length && brands.length && sizes.length) {
              filteredProducts = categoryProducts.filter(
                (product: any) =>
                  brandProducts.includes(product) &&
                  sizeProducts.includes(product)
              );
            } else if (categories.length && brands.length) {
              filteredProducts = categoryProducts.filter((product: any) =>
                brandProducts.includes(product)
              );
            } else if (categories.length && sizes.length) {
              filteredProducts = categoryProducts.filter((product: any) =>
                sizeProducts.includes(product)
              );
            } else if (brands.length && sizes.length) {
              filteredProducts = brandProducts.filter((product: any) =>
                sizeProducts.includes(product)
              );
            } else if (categories.length) {
              filteredProducts = categoryProducts;
            } else if (brands.length) {
              filteredProducts = brandProducts;
            } else if (sizes.length) {
              filteredProducts = sizeProducts;
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

  sortProducts(sortOption: string): void {
    if (sortOption === 'price-asc') {
      this.products.sort(
        (a, b) => this.parsePrice(a.newPrice) - this.parsePrice(b.newPrice)
      );
    } else if (sortOption === 'price-desc') {
      this.products.sort(
        (a, b) => this.parsePrice(b.newPrice) - this.parsePrice(a.newPrice)
      );
    }
  }

  parsePrice(price: string): number {
    return parseFloat(price.replace('$', '').replace(',', ''));
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
