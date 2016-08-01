import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
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


  constructor( public authService: AuthService) {}

  ngOnInit() {
  }

  login(email:string, pass:string){
    console.log(email);
    this.authService.login(email, pass)
    .catch(erro => console.log);
  }


}
