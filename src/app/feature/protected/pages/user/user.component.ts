import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/shared/interfaces/auth.interface';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  profile: RegisterResponse | null  = null;

  constructor(private store: StoreService, private router:Router) { }

  ngOnInit(): void {
    this.store.getProfile()
    .subscribe(profile => this.profile = profile);
  }

  logout(){
    this.store.logout();
    this.router.navigate(['/auth']);
  }

}
