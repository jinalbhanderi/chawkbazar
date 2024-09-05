import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Categories, ProductData } from '../model/category-data.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private dataUrl = '../../assets/json/categories.json';
  private productUrl = '../../assets/json/products.json';
  private brandUrl = '../../assets/json/brand.json';
  private cachedProducts: ProductData | null = null;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.dataUrl).pipe(
      catchError(error => {
        console.error('Error fetching categories', error);
        return of({} as Categories);
      })
    );
  }

  getProducts(): Observable<ProductData> {
    if (this.cachedProducts) {
      return of(this.cachedProducts);
    }
    return this.http.get<ProductData>(this.productUrl).pipe(
      map(data => {
        this.cachedProducts = data;
        return data;
      }),
      catchError(error => {
        console.error('Error fetching products', error);
        return of({} as ProductData);
      })
    );
  }
  getBrand(): Observable<ProductData> {
    if (this.cachedProducts) {
      return of(this.cachedProducts);
    }
    return this.http.get<ProductData>(this.brandUrl).pipe(
      map((data) => {
        this.cachedProducts = data;
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching products', error);
        return of({} as ProductData);
      })
    );
  }
}
