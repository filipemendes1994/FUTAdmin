import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES],
  providers: [MdIconRegistry],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) { }

  ngOnInit() {
    this.items = this.af.database.list('alunos');
    console.log(this.items);

    this.af.auth.login({
      email: 'danielgek@gmail.com',
      password: 'daniel'
    }).then(function (error: any) {
      console.log(error);
    });
  }
}

