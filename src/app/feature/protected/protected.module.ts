import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './shared/components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
    declarations: [
        UserComponent,
        TableComponent,
        DialogComponent,
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule    
    ]
})
export class ProtectedModule { }
