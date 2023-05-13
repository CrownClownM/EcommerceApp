import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product !: ProductsResponse;
  @ViewChild('slider') slider: any;

  constructor(private activatedRoute: ActivatedRoute, private store: StoreService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.store.oneProduct(id))
    )
    .subscribe(data => this.product = data);
  }

  img(anything:any) {
    let slider = this.slider.nativeElement;
    console.log(slider.src);
    slider.src = anything;
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

  addProduct(){
    this.store.saveCart(this.product, this.product.quantity);
    this.play();
  }

  play() {
    const audio = new Audio('assets/buy.mp3');
    audio.play();
  }

}
