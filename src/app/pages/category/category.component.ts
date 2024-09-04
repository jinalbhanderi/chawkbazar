import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  selectedValues: Set<string> = new Set<string>();

  constructor(private router: Router) {}

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
    const categoriesArray = Array.from(this.selectedValues);

    const categories = categoriesArray.join(',');

    const route = categories ? `search/${categories}` : 'search';
    this.router.navigate([route]).catch((err) => {
      console.error('Navigation error:', err);
    });
  }
}
