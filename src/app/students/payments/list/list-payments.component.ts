import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {Student , IStudent} from '../../student';
import { StudentsService } from '../../students.service';
import {FirebaseObjectObservable} from 'angularfire2';
import {Payment} from '../payment';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'list-payments',
  templateUrl: 'list-payments.component.html',
  styleUrls: ['list-payments.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
  ],
  providers: [StudentsService, MdIconRegistry],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
})

export class ListPaymentsComponent implements OnInit {
  private sub: any;
  public studentObservable: FirebaseObjectObservable<IStudent>;
  public student: Student;
  public edit: boolean = false;
  public toAdd: Payment;
  public auxNum: number;

  constructor(private as: StudentsService, private route: ActivatedRoute) {
    this.toAdd = new Payment();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.studentObservable = this.as.getStudent(id);
      this.studentObservable.subscribe(student => this.student = student);
      console.log(this.student);
    });
  }

  editPayment(pagamento: Payment) {
    this.auxNum = this.student.payments.indexOf(pagamento);
    this.toAdd = this.student.payments[this.auxNum];
    this.edit = true;
  }

  deletePayment(pagamento: Payment) {
    this.student.payments.splice(this.student.payments.indexOf(pagamento), 1);
    this.as.editStudent(this.studentObservable, this.student);
  }

  addPayment() {
    this.toAdd.datePayment = Math.floor(Date.now() / 1000);

    if (this.student.payments === undefined) {
      this.student.payments = [this.toAdd];
    } else {
      this.student.payments.push(this.toAdd);
    }
    this.as.editStudent(this.studentObservable, this.student);

    this.toAdd = new Payment();
  }

  setPayment() {
      this.toAdd.datePayment = Math.floor(Date.now() / 1000);
      this.student.payments[this.auxNum] = this.toAdd;
      this.edit = false;
      this.toAdd = new Payment();
      this.as.editStudent(this.studentObservable, this.student);
  }

  

}
