import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

import { MdSidenav } from '@angular2-material/sidenav';



@Component({
  selector: 'app-root',
  directives: [],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  showBack: boolean = false;
  showSidenav: boolean = false;
  @ViewChild(MdSidenav) sidenav:MdSidenav;

  constructor( private router: Router, private location: Location, public as:AuthService) {}

  ngOnInit() {
    this.router.events.subscribe(path => {
      if (this.as.isLogged) {
        this.sidenav.open();
      }else {
        this.sidenav.close();
      }
      // if the path is 2 steps deep
      if (path.url.split('/').length - 1 >= 2) {
        this.showBack = true;
      }else {
        this.showBack = false;
      }
    });

  }

  goBack() {
    this.location.back();
  }

  logout(){
    this.as.isLogged = false;
    this.router.navigate(['/login']);
  }
}

