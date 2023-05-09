import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ValidateRoleGuard } from 'src/app/core/guards/validate-role.guard';
import { ValidateRoleAdminGuard } from 'src/app/core/guards/validate-role-admin.guard';

const routes: Routes = [

  {
    path: '',
    component: UserComponent,
    canActivate: [ValidateRoleGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ValidateRoleAdminGuard],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
