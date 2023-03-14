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
      switchMap(({id}) => this.store.oneProduct(id)),
      tap(console.log)
    )
    .subscribe(data => this.product = data);
  }

  img(anything:any) {
    let slider = this.slider.nativeElement;
    console.log(slider.src);
    slider.src = anything;
  }

}
