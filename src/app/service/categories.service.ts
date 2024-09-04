import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories, ProductData } from '../model/category-data.model';


@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private dataUrl = '../../assets/json/categories.json';
  private productUrl = '../../assets/json/products.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.dataUrl);
  }
  getProducts(): Observable<ProductData> {
    return this.http.get<ProductData>(this.productUrl);
  }
}
