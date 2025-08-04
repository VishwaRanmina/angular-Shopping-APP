import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product as ProductModel } from '../models/product';
import { Category } from '../category/category';
import { CategoryModal } from '../models/category.modal';

@Injectable({
  providedIn: 'root'
})
export class Product {
  
  apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getcategories(): Observable<CategoryModal[]> {
    return this.http.get<CategoryModal[]>(this.apiUrl + "/categories");
  }
}
