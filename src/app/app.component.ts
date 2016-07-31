import { Component, OnInit, ViewChild} from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
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
})
export class AppComponent implements OnInit {
  showBack: boolean = false;
  showSidenav: boolean = false;
  @ViewChild(MdSidenav) sidenav:MdSidenav;

  constructor( private router: Router, private location: Location, public as:AuthService) {}

  ngOnInit() {
    this.router.events.subscribe(path => {
      if (this.as.isLogged){
        this.sidenav.open();
      }else{
        this.sidenav.close();
      }
      // if the path is 2 steps deep
      if (path.url.split('/').length - 1 >= 2) {
        this.showBack = true;
      }else{
        this.showBack = false;
      }
    });

  }

  goBack() {
    this.location.back();
  }
}

