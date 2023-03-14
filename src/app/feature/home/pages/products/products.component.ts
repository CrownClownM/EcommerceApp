import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  word : string = '';
  quantity : number = 20;
  loadData: boolean = true;
  products !: ProductsResponse[];

  constructor( private store:StoreService) { }

  ngOnInit(): void {
    this.store.allProducts(20)
    .subscribe( products => {
      this.products = products
      this.loadData = false;
      console.log(products.length);
    });
  }

  search(){
    console.log("Buscando...");
    this.store.searchProducts(this.word, this.quantity)
    .subscribe(products => {
      this.products = products;
    })
  }

}
