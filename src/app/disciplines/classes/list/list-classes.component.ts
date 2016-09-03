import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IClassT } from '../class';
import { ClassesService } from '../classes.service';


@Component({
  selector: 'app-list-classes',
  templateUrl: 'list-classes.component.html',
  styleUrls: ['list-classes.component.css'],

})
export class ListClassesComponent implements OnInit, OnDestroy {

  public routerSubscription: Subscription;
  public presentationName: string;
  public type: string;
  public classes: Observable<IClassT[]>;
  constructor(public cs: ClassesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
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

  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }
}
