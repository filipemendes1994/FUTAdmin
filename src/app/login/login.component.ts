import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router}    from '@angular/router';
@Component({
  selector: 'app-login',
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
    this.loginForm = this.fb.group({
      email: ['danielgek@gmail.com', Validators.required],
      password: ['daniel', Validators.required]
    });
  }

  submit() {
    if (!this.submitted && this.loginForm.valid) {
      this.submitted = true;
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
