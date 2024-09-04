import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModernService {
  private dataUrl = '../../assets/json/modern-products.json';
  private standardaUrl = '../../assets/json/standard.json';
  private minimalUrl = '../../assets/json/minimal.json';
  private vintageUrl = '../../assets/json/vintage.json';
  private classicUrl = '../../assets/json/classic.json';
  private trendyUrl = '../../assets/json/trendy.json';
  private elegantUrl = '../../assets/json/elegant.json';
  private refinedUrl = '../../assets/json/refined.json';
  private fashionUrl = '../../assets/json/fashion.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
  getStandardProducts(): Observable<any> {
    return this.http.get(this.standardaUrl);
  }
  getMinimalProducts(): Observable<any> {
    return this.http.get(this.minimalUrl);
  }
  getVintageProducts(): Observable<any> {
    return this.http.get(this.vintageUrl);
  }
  getClassicProducts(): Observable<any> {
    return this.http.get(this.classicUrl);
  }
  gettrendyProducts(): Observable<any> {
    return this.http.get(this.trendyUrl);
  }
  getelegantProducts(): Observable<any> {
    return this.http.get(this.elegantUrl);
  }
  getrefinedProducts(): Observable<any> {
    return this.http.get(this.refinedUrl);
  }
  getfashionProducts(): Observable<any> {
    return this.http.get(this.fashionUrl);
  }
}
