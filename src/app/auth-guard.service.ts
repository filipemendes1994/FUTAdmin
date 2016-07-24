import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';


@Injectable()
export class AuthGuardService {

  constructor(public as: AuthService, private router: Router) { }

  canActivate() {
    if (this.as.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}


