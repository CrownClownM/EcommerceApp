import { Component, Input, OnInit } from '@angular/core';
import { CategoriesResponse } from 'src/app/shared/interfaces/store.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() categorie !: CategoriesResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
