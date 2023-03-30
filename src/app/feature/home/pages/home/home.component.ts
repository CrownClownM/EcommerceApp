import { Component, Input, OnInit } from '@angular/core';
import { CategoriesResponse, ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quantity : number = 4;
  categories !: CategoriesResponse[];
  products !: ProductsResponse[];
  banner1 = "Descubre las tendencias del mercado";
  banner2 = "Las mejores compras a los mejores precios";
  banner3 = "Productos para todos y para todas";

  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.store.categories()
      .subscribe( categories => this.categories = categories);
    this.store.someProducts(this.quantity)
      .subscribe( products => this.products = products);
  }

}
