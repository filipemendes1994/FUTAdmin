import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProfessor, Professor } from '../professor';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { ProfessorsService } from '../professors.service';
import { Subscription } from 'rxjs/Rx'; 


@Component({
  selector: 'form-professors',
  templateUrl: 'form-professors.component.html',
  styleUrls: ['form-professors.component.css']
})
export class FormProfessorsComponent implements OnInit, OnDestroy {

  private professorObservable: FirebaseObjectObservable<IProfessor>;
  private routerSubscription: Subscription;
  private professorSubscription; Subscription;

  public edit: boolean = false;
  public professor: Professor;
  public canGive: boolean[];

  constructor(public ps: ProfessorsService, private router: Router, private route: ActivatedRoute) {
  }


  submit() {
    this.professor.canGive = this.canGive;

    if (!this.edit) {
      this.ps.addProfessor(this.professor);
    } else {
      this.ps.editProfessor(this.professorObservable, this.professor);
    }

    this.router.navigate(['/professors']);

  }

  ngOnInit() {
    this.professor = new Professor();
    this.canGive = new Array(4);
    this.routerSubscription = this.route.params.subscribe(params => {
      let id = params['id'];
      if (id !== undefined) {
        this.edit = true;
        this.professorObservable = this.ps.getProfessor(id);
        this.professorSubscription = this.professorObservable.subscribe(professor => {
          this.professor = professor;
          this.edit = true;
          if (this.professor.canGive !== undefined) {
            this.canGive = this.professor.canGive;
          }
        });
      }
    });
  }

    if (this.edit) {
      this.professorSubscription.unsubscribe();
    }
    this.routerSubscription.unsubscribe();
  }
}
