import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {IClassT} from '../class';
import {ClassesService} from '../classes.service';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-list-classes',
  templateUrl: 'list-classes.component.html',
  styleUrls: ['list-classes.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
  ],
  providers: [ClassesService],

})
export class ListClassesComponent implements OnInit {

  public sub: any;
  public presentationName: string;
  public type: string;
  public classes: Observable<IClassT[]>;
  constructor(public cs: ClassesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.classes = this.cs.getClasses(this.type);
      if (this.type === 'fm') {
        this.presentationName = 'Formação Musical';
      } else if (this.type === 'inst') {
        this.presentationName = 'Instrumento';
      } else if (this.type === 'cc') {
        this.presentationName = 'Classe de Conjunto';
      } else if (this.type === 'inst') {
        this.presentationName = 'Solfejo';
      }
    });
  }

  search(term: string) {
    if (term !== '') {
      this.classes = this.cs.filter(term);
    } else {
       this.classes = this.cs.getClasses(this.type);
    }
  }

  editClass(key: string) {
    this.router.navigate(['/disciplines/classes/' + this.type + '/form/' + key]);
  }

  goToAdd() {
    this.router.navigate(['/disciplines/classes/' + this.type + '/form']);
  }
}
