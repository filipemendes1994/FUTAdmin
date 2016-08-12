import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';

import { Router}    from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES
  ],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  showWarning: boolean = false;
  warningMessage: string = '';
  submitted: boolean = false;


  constructor(public authService: AuthService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.loginForm);
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }

  submit() {
    if (!this.submitted && this.loginForm.valid) {
      this.submitted = true;
      console.log(this.loginForm);
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .then(success => this.router.navigate(['/home']))
        .catch(error => {
          this.showWarning = true;
          this.warningMessage = error.message;
          this.submitted = false;

        });
      }
  }


}
