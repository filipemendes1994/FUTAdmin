import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProfessor, Professor } from '../professor';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { ProfessorsService } from '../professors.service';
import { Subscription } from 'rxjs/Rx'; 

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  public professorsForm: FormGroup;

  constructor(
    public ps: ProfessorsService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) {

  }

  ngOnInit() {

     this.professorsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      canGive: this.fb.group({
        0: this.fb.control(false),
        1: this.fb.control(false),
        2: this.fb.control(false),
        3: this.fb.control(false),
      }),
      rewarnPerHour: ['', Validators.required]
    });

    this.professor = new Professor();
    this.canGive = new Array(4);
    this.routerSubscription = this.route.params.subscribe(params => {
      let id = params['id'];
      if (id !== undefined) {
        this.edit = true;
        this.professorObservable = this.ps.getProfessor(id);
        this.professorSubscription = this.professorObservable.subscribe(professor => {
          this.professorsForm.patchValue({
            firstName: professor.firstName,
            lastName: professor.lastName,
            address: professor.address,
            email: professor.email,
            contact: professor.contact,
            city: professor.city,
            postalCode: professor.postalCode,
            birthdayDate: professor.birthdayDate,
            canGive: professor.canGive,
            rewarnPerHour: professor.rewarnPerHour
          });
          this.professor = professor;
          this.edit = true;
          if (this.professor.canGive !== undefined) {
            this.canGive = this.professor.canGive;
          }
        });
      }
    });
  }

  submit(professor: IProfessor, isValid: boolean) {
    if (isValid) {
      this.professor.canGive = this.canGive;
      if (!this.edit) {
        this.ps.addProfessor(professor);
      } else {
        this.ps.editProfessor(this.professorObservable, professor);
      }
    }
    this.router.navigate(['/professors']);
  }

  ngOnDestroy() {
    if (this.edit) {
      this.professorSubscription.unsubscribe();
    }
    this.routerSubscription.unsubscribe();
  }
}
