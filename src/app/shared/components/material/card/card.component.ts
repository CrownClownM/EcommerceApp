import { Component, Input, OnInit } from '@angular/core';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product !: ProductsResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
