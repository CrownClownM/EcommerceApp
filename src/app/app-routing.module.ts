import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
