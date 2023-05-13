import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './shared/components/table/table.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartProductsComponent } from './shared/components/cart-products/cart-products.component';



@NgModule({
    declarations: [
        UserComponent,
        TableComponent,
        DialogComponent,
        AdminComponent,
        CartComponent,
        CartProductsComponent
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
        SharedModule,
        ReactiveFormsModule, 
    ]
})
export class ProtectedModule { }
