import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router}    from '@angular/router';

@Injectable()
export class AuthService {

  public isLogged = false;

  constructor(public af: AngularFire, private router: Router) { }

  login(email: string, password: string) {

    return this.af.auth.login({email: email,password: password})
      .then(data => {
        this.isLogged = true;
        this.router.navigate(['/home']);
      });
  }

}
