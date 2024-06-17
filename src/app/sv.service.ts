import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class SvService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getProduct(id: string | number | undefined) {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }

  deleteProduct(id: string | number | undefined) {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }

  createProduct(data: Product) {
    return this.http.post(`${this.baseUrl}/products`, data);
  }

  updateProduct(data: Product, id: number | string | undefined) {
    return this.http.patch(`${this.baseUrl}/products/${id}`, data);
  }

  register(data: User) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: User) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
