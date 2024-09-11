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
    private productDataService: CategoriesService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        const categories = params['category']
          ? params['category'].split(',')
          : [];
        const brands = params['brand'] ? params['brand'].split(',') : [];
        const sizes = params['size'] ? params['size'].split(',') : [];
        const priceRanges = params['price'] ? params['price'].split(',') : [];

        this.productDataService.getProducts().subscribe({
          next: (productData) => {
            let filteredProducts: Product[] = [];

            // Check if any filters are applied
            if (
              categories.length === 0 &&
              brands.length === 0 &&
              sizes.length === 0 &&
              priceRanges.length === 0
            ) {
              // No filters applied, show all products
              filteredProducts = Object.values(productData).flat();
            } else {
              // Filter products based on categories, brands, sizes, and prices
              const categoryProducts = categories.flatMap(
                (category: string) => productData[category] || []
              );
              const brandProducts = brands.flatMap((brand: string) =>
                Object.values(productData)
                  .flat()
                  .filter((product) => product.brand === brand)
              );
              const sizeProducts = sizes.flatMap((size: string) =>
                Object.values(productData)
                  .flat()
                  .filter((product) => product.variations === size)
              );
              const priceProducts = priceRanges.flatMap((priceRange: string) =>
                Object.values(productData)
                  .flat()
                  .filter((product) =>
                    product.newPrice
                      ? this.isPriceInRange(
                          this.parsePrice(product.newPrice),
                          priceRange
                        )
                      : false
                  )
              );

              // Combine filters: category, brand, size, price
              filteredProducts = Object.values(productData)
                .flat()
                .filter(
                  (product: Product) =>
                    (categories.length === 0 ||
                      categoryProducts.includes(product)) &&
                    (brands.length === 0 || brandProducts.includes(product)) &&
                    (sizes.length === 0 || sizeProducts.includes(product)) &&
                    (priceRanges.length === 0 ||
                      priceProducts.includes(product))
                );
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

  isPriceInRange(price: number, range: string): boolean {
    if (range === '1000+') {
      return price >= 1000;
    }
    const [min, max] = range.split('-').map(Number);
    if (!isNaN(min) && isNaN(max)) {
      return price >= min;
    }
    if (isNaN(min) && !isNaN(max)) {
      return price <= max;
    }
    if (!isNaN(min) && !isNaN(max)) {
      return price >= min && price <= max;
    }
    return false;
  }

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }

  openPopup(product: Product): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }
}
