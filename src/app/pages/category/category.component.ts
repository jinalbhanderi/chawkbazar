import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/category-data.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  selectedValues: Set<string> = new Set<string>();
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

  products: Product[] = [];
  title: string = '';
  selectedProduct: any = null;
  showPopup = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  data(event: Event, value: string): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.selectedValues.add(value);
    } else {
      this.selectedValues.delete(value);
    }
    this.navigateWithSelectedValues();
  }

  private navigateWithSelectedValues(): void {
    if (this.selectedValues.size === 0) {
      this.router
        .navigate([], {
          relativeTo: this.route,
          queryParams: { category: null },
          queryParamsHandling: 'merge',
        })
        .catch((err) => {
          console.error('Navigation error:', err);
        });
    } else {
      const categoriesArray = Array.from(this.selectedValues);
      const categories = categoriesArray.join(',');
      this.router
        .navigate([], {
          relativeTo: this.route,
          queryParams: { category: categories },
          queryParamsHandling: 'merge',
        })
        .catch((err) => {
          console.error('Navigation error:', err);
        });
    }
  }

  removeCategory(category: string): void {
    this.selectedValues.delete(category);
    this.navigateWithSelectedValues();
  }
}
