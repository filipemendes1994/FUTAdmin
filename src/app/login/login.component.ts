import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Router}    from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  directives:[FORM_DIRECTIVES, 
              MD_INPUT_DIRECTIVES, 
              MD_BUTTON_DIRECTIVES, 
              MD_CARD_DIRECTIVES,
              MD_TOOLBAR_DIRECTIVES
  ],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  showWarning: boolean = false;
  warningMessage:string = '';


  constructor( public authService: AuthService,  private router: Router) {}

  ngOnInit() {
  }

  login(email:string, pass:string){
    
    this.authService.login(email, pass)
    .then(success => this.router.navigate(['/home']))
    .catch(error => {
      this.showWarning = true;
      this.warningMessage = error.message;
    });
  }


}
