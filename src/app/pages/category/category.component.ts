import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/category-data.model';

type FilterType = 'category' | 'brand' | 'price' | 'size';

interface Filter {
  value: string;
  type: FilterType;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories = ['bags', 'kids', 'men', 'sneakers', 'sports'];
  brands = ['fusion', 'vintage', 'masteriod', 'hoppister', 'klien-shoes'];
  prices = [
    { name: 'Under $50', value: '0-50' },
    { name: '$50 to $100', value: '50-100' },
    { name: '$100 to $150', value: '100-150' },
    { name: '$150 to $200', value: '150-200' },
    { name: '$200 to $300', value: '200-300' },
    { name: '$300 to $500', value: '300-500' },
    { name: '$500 to $1000', value: '500-1000' },
    { name: 'Over $1000', value: '1000+' },
  ];
  sizes = ['Small', 'Medium', 'Large', '7', '8', '9', '10'];
  colors = [
    { name: 'Red', colorCode: 'rgb(255, 0, 0)' },
    { name: 'Blue', colorCode: 'rgb(0, 0, 255)' },
    { name: 'Yellow', colorCode: 'rgb(255, 255, 0)' },
  ];

  selectedCategories = new Set<string>();
  selectedBrands = new Set<string>();
  selectedPrices = new Set<string>();
  selectedSizes = new Set<string>();
  selectedColors = new Set<string>();
  products: Product[] = [];
  title = '';
  selectedProduct: any = null;
  showPopup = false;
  hasData: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Extract filters from URL query params
      this.selectedCategories = new Set(
        params['category'] ? params['category'].split(',') : []
      );
      this.selectedBrands = new Set(
        params['brand'] ? params['brand'].split(',') : []
      );
      this.selectedPrices = new Set(
        params['price'] ? params['price'].split(',') : []
      );
      this.selectedSizes = new Set(
        params['size'] ? params['size'].split(',') : []
      );
      this.selectedColors = new Set(
        params['color'] ? params['color'].split(',') : []
      );
    });
  }

  get selectedValues(): Filter[] {
    const categoriesArray: Filter[] = Array.from(this.selectedCategories).map(
      (value) => ({ value, type: 'category' })
    );
    const brandsArray: Filter[] = Array.from(this.selectedBrands).map(
      (value) => ({ value, type: 'brand' })
    );
    const pricesArray: Filter[] = Array.from(this.selectedPrices).map(
      (value) => ({ value, type: 'price' })
    );
    const sizeArray: Filter[] = Array.from(this.selectedSizes).map((value) => ({
      value,
      type: 'size',
    }));
    return [...categoriesArray, ...brandsArray, ...pricesArray, ...sizeArray];
  }

  clearAll(): void {
    this.selectedCategories.clear();
    this.selectedBrands.clear();
    this.selectedPrices.clear();
    this.selectedSizes.clear();
    this.selectedColors.clear();
    this.updateQueryParams();
  }

  data(event: Event, value: any, type: FilterType): void {
    const inputElement = event.target as HTMLInputElement;
    let set: Set<string> = new Set();

    if (type === 'category') {
      set = this.selectedCategories;
    } else if (type === 'brand') {
      set = this.selectedBrands;
    } else if (type === 'price') {
      set = this.selectedPrices;
    } else if (type === 'size') {
      set = this.selectedSizes;
    } else if (type === 'color') {
      set = this.selectedColors;
    }

    if (inputElement.checked) {
      set.add(value);
    } else {
      set.delete(value);
    }

    this.updateQueryParams();
  }

  private updateQueryParams(): void {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          category: this.selectedCategories.size
            ? Array.from(this.selectedCategories).join(',')
            : null,
          brand: this.selectedBrands.size
            ? Array.from(this.selectedBrands).join(',')
            : null,
          price: this.selectedPrices.size
            ? Array.from(this.selectedPrices).join(',')
            : null,
          size: this.selectedSizes.size
            ? Array.from(this.selectedSizes).join(',')
            : null,
          color: this.selectedColors.size
            ? Array.from(this.selectedColors).join(',')
            : null,
        },
        queryParamsHandling: 'merge',
      })
      .catch((err) => console.error('Navigation error:', err));
  }

  removeFilter(value: string, type: FilterType): void {
    if (type === 'category') {
      this.selectedCategories.delete(value);
    } else if (type === 'brand') {
      this.selectedBrands.delete(value);
    } else if (type === 'price') {
      this.selectedPrices.delete(value);
    } else if (type === 'size') {
      this.selectedSizes.delete(value);
    } else if (type === 'color') {
      this.selectedColors.delete(value);
    }
    this.updateQueryParams();
  }

  openPopup(product: Product): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
