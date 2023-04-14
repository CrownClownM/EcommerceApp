import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidateTokenGuard } from './core/guards/validate-token.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then( m => m.HomeModule )
  },  
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.module').then( m => m.AuthModule )
  },  
  {
    path: 'user',
    loadChildren: () => import('./feature/protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ValidateTokenGuard],
    canLoad: [ValidateTokenGuard]
  },  
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
