import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/shared/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {

  constructor( private store: StoreService, private router: Router ){}

  canActivate(): Observable<boolean> | boolean { 
    const isValidToken = this.store.validateRefreshToken();
    if (isValidToken) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

  canLoad(): Observable<boolean> | boolean {
    const isValidToken = this.store.validateRefreshToken();
    if (isValidToken) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }

  //Para direccionar

  /*   accountLink(account) {
    if (account.type === 'main') {
      return ['main-account'];
    } else if (account.type === 'sub') {
      return ['sub-account'];
    }
  } */
}
