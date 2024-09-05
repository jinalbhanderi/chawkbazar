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

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe((params) => {
  //     const categories = params['category'] ? params['category'].split(','): [];
  //     const brand = params['brand'] ? params['brand'].split(','): [];
  //     if (categories.length) {
  //       this.productDataService.getProducts().subscribe((productData) => {
  //         this.products = categories.flatMap(
  //           (category: string | number) => productData[category] || []
  //         );
  //         this.title = this.products.length ? 'Products' : 'No Products';
  //       });
  //     } else if (brand.length) {
  //       // Fetch products by brand
  //       this.productDataService.getBrand().subscribe((productData) => {
  //         this.products = brand.flatMap(
  //           (brandName: string | number) => productData[brandName] || []
  //         );
  //         this.title = this.products.length ? 'Products' : 'No Products';
  //       });
  //     } else {
  //       // Fetch and display all products when no categories are selected
  //       this.productDataService.getProducts().subscribe((productData) => {
  //         this.products = Object.values(productData).flat();
  //         this.title = this.products.length ? 'All Products' : 'No Products';
  //       });
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const categories = params['category']
        ? params['category'].split(',')
        : [];
      const brand = params['brand'] ? params['brand'].split(',') : [];

      if (categories.length && brand.length) {
        // Fetch and merge products by both category and brand
        this.productDataService.getProducts().subscribe((productData) => {
          const categoryProducts = categories.flatMap(
            (category: string | number) => productData[category] || []
          );
          this.productDataService.getBrand().subscribe((brandData) => {
            const brandProducts = brand.flatMap(
              (brandName: string | number) => brandData[brandName] || []
            );
            // Combine both category and brand products
            this.products = [...categoryProducts, ...brandProducts];
            this.title = this.products.length ? 'Products' : 'No Products';
          });
        });
      } else if (categories.length) {
        // Fetch products by category only
        this.productDataService.getProducts().subscribe((productData) => {
          this.products = categories.flatMap(
            (category: string | number) => productData[category] || []
          );
          this.title = this.products.length ? 'Products' : 'No Products';
        });
      } else if (brand.length) {
        // Fetch products by brand only
        this.productDataService.getBrand().subscribe((productData) => {
          this.products = brand.flatMap(
            (brandName: string | number) => productData[brandName] || []
          );
          this.title = this.products.length ? 'Products' : 'No Products';
        });
      } else {
        // Fetch all products if no category or brand is selected
        this.productDataService.getProducts().subscribe((productData) => {
          this.products = Object.values(productData).flat();
          this.title = this.products.length ? 'All Products' : 'No Products';
        });
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
