import { Component, OnInit } from '@angular/core';
import { CategoriesResponse, ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  word : string = '';
  quantity : number = 12;
  loadData: boolean = true;
  length: number = 0;
  index: number = 0;
  products !: ProductsResponse[];
  productsPaginator !: ProductsResponse[];
  categories !: CategoriesResponse[];

  constructor( private store:StoreService) { }

  ngOnInit(): void {
    this.store.allProducts()
    .subscribe( products => {
      this.products = products.slice(0,12);
      this.productsPaginator = products;
      this.length = products.length;
      this.loadData = false;
    });
    this.store.categories()
    .subscribe( categories => this.categories = categories);
  }

  search(){
    this.store.searchProducts(this.word)
    .subscribe(products => {
      if(products.length == 0){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se encontró el producto',
      })} else {
        this.productsPaginator = products;
        this.products = this.productsPaginator.slice(0,12);
        this.length = products.length;
        this.index = 0;
        }
      }
    )
  }

  filter(id:number){
    this.store.filterCategories(id)
    .subscribe(products => {
      this.productsPaginator = products;
      this.products = this.productsPaginator.slice(0,12);
      this.length = products.length;
      this.index = 0;
    })
  }

  paginated(productsPaginated:ProductsResponse[]){
    this.products = productsPaginated;
  }

  sortPrice(event:Event){
    const value = (event.target as HTMLOptionElement).value;
    if(value === "LowToHigh"){
      this.productsPaginator.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        } else if (a.price > b.price) {
            return 1;
        } else {
            return 0;
        }
      })
    } else {
      this.productsPaginator.sort((a, b) => {
        if (a.price > b.price) {
            return -1;
        } else if (a.price < b.price) {
            return 1;
        } else {
            return 0;
        }
      })
    }
    this.products = this.productsPaginator.slice(0,12); 
  }
}

