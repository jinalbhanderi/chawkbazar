import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/category-data.model';
type FilterType = 'category' | 'brand';

interface Filter {
  value: string;
  type: FilterType;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
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
  products: Product[] = [];
  title = '';
  selectedProduct: any = null;
  showPopup = false;
  hasData: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Extract categories and brands from URL query params
      const categories = params['category']? params['category'].split(','): [];
      const brands = params['brand'] ? params['brand'].split(',') : [];

      // Set selected categories and brands based on query parameters
      this.selectedCategories = new Set(categories);
      this.selectedBrands = new Set(brands);
    });
  }

  get selectedValues(): Filter[] {
    const categoriesArray: Filter[] = Array.from(this.selectedCategories).map(
      (value) => ({ value, type: 'category' })
    );
    const brandsArray: Filter[] = Array.from(this.selectedBrands).map(
      (value) => ({ value, type: 'brand' })
    );
    return [...categoriesArray, ...brandsArray];
  }

  clearAll(): void {
    this.selectedCategories.clear();
    this.selectedBrands.clear();
    this.updateQueryParams();
  }

  data(event: Event, value: string, type: 'category' | 'brand'): void {
    const inputElement = event.target as HTMLInputElement;
    const set =
      type === 'category' ? this.selectedCategories : this.selectedBrands;

    if (inputElement.checked) {
      set.add(value);
    } else {
      set.delete(value);
    }

    this.updateQueryParams();
  }

  private updateQueryParams(): void {
    const categoriesArray = Array.from(this.selectedCategories);
    const brandsArray = Array.from(this.selectedBrands);

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          category: categoriesArray.length ? categoriesArray.join(',') : null,
          brand: brandsArray.length ? brandsArray.join(',') : null,
        },
        queryParamsHandling: 'merge',
      })
      .catch((err) => console.error('Navigation error:', err));
  }

  removeFilter(value: string, type: 'category' | 'brand'): void {
    if (type === 'category') {
      this.selectedCategories.delete(value);
    } else {
      this.selectedBrands.delete(value);
    }
    this.updateQueryParams();
  }

}
