import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import { AuthService } from './auth.service';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ],

  providers: [MdIconRegistry],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  

  constructor(af:AuthService) {}

  ngOnInit() {

  }
}

