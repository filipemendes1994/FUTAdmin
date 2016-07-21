import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
export class AppComponent {
  title = 'app works!';
  items : FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('alunos');
    console.log(this.items);
  }
  
}
