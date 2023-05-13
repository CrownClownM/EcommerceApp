import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  @Input() product : ProductsResponse | null = null;
  @Output() update: EventEmitter<ProductsResponse[]> = new EventEmitter();

  constructor(private store:StoreService) { }

  ngOnInit(): void {
  }

  increase(){
    if(this.product != null){
      var c = this.product?.quantity ?? 1;
      c = c + 1;
      this.product.quantity = c;
    }
  }

  decrease(){
    if(this.product != null){
      var c = this.product?.quantity ?? 1;
      c = c - 1;
      this.product.quantity = c;
    }
  }

  remove(){
    this.store.deleteProductCart(this.product!.id);
    const cart = this.store.getCart()
    this.update.emit(cart);
  }

}
