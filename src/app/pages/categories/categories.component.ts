import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories, CategoryData } from 'src/app/model/category-data.model';
import { CategoriesService } from 'src/app/service/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoryName: string | null = null;
  categoryData: CategoryData | undefined;
  categories: Categories | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;

      this.route.paramMap.subscribe((params) => {
        this.categoryName = params.get('categoryName');
        if (this.categoryName && this.categories) {
          this.categoryData = this.categories[this.categoryName];
          if (!this.categoryData) {
            // Handle case where category data is not found
            this.categoryData = {
              items: [], // No items if category is not found
            };
             this.categoryName = null;
          }
        }
      });
    });
  }

  selectedProduct: any = null;
  showPopup = false;

  closePopup(): void {
    this.showPopup = false;
    this.selectedProduct = null;
  }

  openPopup(product: any): void {
    this.selectedProduct = product;
    this.showPopup = true;
  }
}

