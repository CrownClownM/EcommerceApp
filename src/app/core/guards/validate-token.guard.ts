import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StoreService } from 'src/app/shared/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {

  constructor( private store: StoreService,
    private router: Router ){}

  canActivate(): Observable<boolean> | boolean { 
    return this.store.validateToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }

 canLoad(): Observable<boolean> | boolean {
    return this.store.validateToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  } 
}
