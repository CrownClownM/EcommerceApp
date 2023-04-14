import { Component, EventEmitter, Input, Output } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductsResponse } from 'src/app/shared/interfaces/store.interface';
import { StoreService } from 'src/app/shared/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {


  @Input() products: ProductsResponse[] = [];
  @Output() newTable: EventEmitter<ProductsResponse[]> = new EventEmitter();

  constructor(private dialog: MatDialog, private store:StoreService ) { }

/*   displayedColumns: string[] = ['title', 'price', 'description', 'category', 'action']; */

  dialogForm() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.updatedTable();
    });
  }

  dialogFormEdit(data:ProductsResponse) {
    const dialogRef = this.dialog.open(DialogComponent, {data});

    dialogRef.afterClosed().subscribe(result => {
      this.updatedTable();
    });
  }

  updatedTable(){
    this.store.allProducts()
    .subscribe(resp => {
      this.newTable.emit(resp);
    })
  }

  deleteProduct(id:number){
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.deleteProduct(id)
        .subscribe(resp=>{
          if(resp){
            Swal.fire({
              icon: 'success',
              title: 'Perfecto',
              text: 'Producto eliminado correctamente',
            })
          }
          this.updatedTable();
        })
      }
    });
  }
}