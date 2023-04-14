import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';

import { CategoriesResponse, ProductsResponse } from '../interfaces/store.interface';
import { environment } from 'src/environments/environment.prod';
import { LoginResponse, RegisterResponse } from '../interfaces/auth.interface';
import { checkToken } from '../interceptors/token.interceptor';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  createProduct(title:string, price:number, description:string): Observable<ProductsResponse>{
    const categoryId = 1;
    const images = ["https://placeimg.com/640/480/any"];
    const url = `${ this.baseUrl }/products`;
    return this.http.post<ProductsResponse>(url, {title, price, description, categoryId, images});
  }

  updateProduct(id:number, title:string, price:number, description:string, categoryId:number, images:string[]): Observable<ProductsResponse>{
    const url = `${ this.baseUrl }/products/${id}`;
    return this.http.put<ProductsResponse>(url, {title, price, description, categoryId, images});
  }

  deleteProduct(id:number): Observable<boolean>{
    const url = `${ this.baseUrl }/products/${id}`;
    return this.http.delete<boolean>(url);
  }

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

  login(email:string, password:string){
    const url = `${ this.baseUrl }/auth/login`;
    return this.http.post<LoginResponse>(url, {email, password})
    .pipe(
      tap( resp => {
        if ( resp.access_token ) {
          localStorage.setItem('token', resp.access_token! );
        }
      }),
    );
  }
  
  register( name: string, email: string, password: string ) {

    const url  = `${ this.baseUrl }/users`;
    const avatar ="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png";
    const body = { name, email, password, avatar };

    return this.http.post<RegisterResponse>( url, body )
/*       .pipe(
        switchMap(() => this.login(name, password))
      ); */

  }

  validateToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/profile`;
    return this.http.get<LoginResponse>( url, { context: checkToken() } )
    .pipe(
      map( resp => {
        return true;
      }),
      catchError( err => of(false) )
    );
  }

  logout() {
    localStorage.clear();
  }

}
