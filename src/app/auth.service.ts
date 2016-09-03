import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  public isLogged:boolean = false;

  constructor(public af: AngularFire) {  }

  login(email: string, password: string) {

    return this.af.auth.login({email: email, password: password})
      .then(data => {
        this.isLogged = true;

      });
  }

}
