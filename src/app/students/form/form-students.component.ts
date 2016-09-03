import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { IStudent, Student } from '../student';
import { ResponsibleAdult } from '../responsibleAdult';
import { StudentsService } from '../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'form-student',
  templateUrl: 'form-students.component.html',
  styleUrls: ['form-students.component.css'],
})
export class FormStudentsComponent implements OnInit, OnDestroy {
  public _keyStudent: string;
  private routerSubscription: Subscription;
  private studentObservable: FirebaseObjectObservable<IStudent>;
  private studentSubscription: Subscription;

  public edit: boolean = false;
  public months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  public studentForm: FormGroup;

  constructor(
    private as: StudentsService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
  ) {
  }

  ngOnInit() {

    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      city: ['', Validators.required],
      socioNumber: ['', Validators.required],
      postalCode: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      responsibleAdult: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        socioNumber: ['', Validators.required],
        birthdayDate: ['', Validators.required],
      })
    });

    this.routerSubscription = this.route.params.subscribe(params => {
      this._keyStudent = params['id'];
      if (this._keyStudent !== undefined) {
        this.edit = true;
        this.studentObservable = this.as.getStudent(this._keyStudent);
        this.studentSubscription = this.studentObservable.subscribe(student => {

          this.studentForm.patchValue({
            firstName: student.firstName,
            lastName: student.lastName,
            address: student.address,
            email: student.email,
            contact: student.contact,
            city: student.city,
            postalCode: student.postalCode,
            birthdayDate: student.birthdayDate,
            responsibleAdult: {
              firstName: student.responsibleAdult.firstName,
              lastName: student.responsibleAdult.lastName,
              address: student.responsibleAdult.address,
              email: student.responsibleAdult.email,
              contact: student.responsibleAdult.contact,
              city: student.responsibleAdult.city,
              postalCode: student.responsibleAdult.postalCode,
              birthdayDate: student.responsibleAdult.birthdayDate,
            }
          });

        });
      }
    });


  }

  submit(student: IStudent, isValid: boolean) {
    if (isValid) {

      student.entryDate = new Date().toTimeString();

      if (!this.edit) {
        this.as.addStudent(student);
      } else {
        this.as.editStudent(this.studentObservable, student);
      }

      this.router.navigate(['/students']);
    } else {
    }

  }

  goToPayments(key: string) {
    this.router.navigate(['/students/form/' + this._keyStudent + '/payments']);
    return false;
  }

  cancel() {
    this.router.navigate(['/students']);
  }

  copyFromStudent(prop: string) {
    let ra: FormGroup = <FormGroup>this.studentForm.controls['responsibleAdult'];
    (<FormControl>ra.controls[prop]).setValue((<FormControl>this.studentForm.controls[prop]).value);
  }

  ngOnDestroy() {

    if (this.edit) {
      this.studentSubscription.unsubscribe();
    }
    this.routerSubscription.unsubscribe();

  }
}
