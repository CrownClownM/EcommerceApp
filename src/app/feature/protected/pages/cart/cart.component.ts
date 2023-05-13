import { Component, OnInit } from '@angular/core';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : ProductsResponse[] | null =null;

  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.cart = this.store.getCart();
  }

  update(productsUpdate:ProductsResponse[]){
    this.cart = productsUpdate;
  }

}
