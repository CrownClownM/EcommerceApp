import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  length: number = 0;
  index: number = 0;
  products: ProductsResponse[] = []; 
  productsPaginator : ProductsResponse[] = [];

  constructor(private store:StoreService, private router:Router) { }

  ngOnInit(): void {
    this.store.allProducts()
    .subscribe( products => {
      this.products = products.slice(0,12);
      this.productsPaginator = products;
      this.length = products.length;
    });
  }

  paginated(productsPaginated:ProductsResponse[]){
    this.products = productsPaginated;
  }

  update(productsUpdated:ProductsResponse[]){
    this.products = productsUpdated.slice(0,12);
    this.productsPaginator = productsUpdated;
    this.length = productsUpdated.length;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
