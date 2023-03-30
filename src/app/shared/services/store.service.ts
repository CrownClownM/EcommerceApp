import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CategoriesResponse, ProductsResponse } from '../interfaces/store.interface';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  someProducts(quantity:number): Observable<ProductsResponse[]>{
    const offset = `0`;
    const url = `${ this.baseUrl }/products?offset=${offset}&limit=${quantity}`;
    return this.http.get<ProductsResponse[]>(url);
  }

  allProducts(): Observable<ProductsResponse[]>{
    const url = `${ this.baseUrl }/products`;
    return this.http.get<ProductsResponse[]>(url);
  }

  oneProduct(id:number): Observable<ProductsResponse>{
    const url = `${ this.baseUrl }/products/${id}`;
    return this.http.get<ProductsResponse>(url);
  }

  searchProducts(busqueda:String): Observable<ProductsResponse[]>{
    const offset = `0`;
    const url = `${ this.baseUrl }/products?title=${busqueda}&offset=${offset}`;
    return this.http.get<ProductsResponse[]>(url);
  }

  categories(): Observable<CategoriesResponse[]>{
    const offset = `0`;
    const cantidad = `5`;
    const url = `${ this.baseUrl }/categories?offset=${offset}&limit=${cantidad}`;
    return this.http.get<CategoriesResponse[]>(url);
  }

  filterCategories(id:number): Observable<ProductsResponse[]>{
    const url = `${ this.baseUrl }/products/?categoryId=${id}`;
    return this.http.get<ProductsResponse[]>(url);
  }

}
