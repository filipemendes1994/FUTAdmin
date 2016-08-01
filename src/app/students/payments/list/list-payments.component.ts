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
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';

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
    MD_CHECKBOX_DIRECTIVES,
  ],
  providers: [StudentsService, MdIconRegistry],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
})

export class ListPaymentsComponent implements OnInit {
  public months = ['Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho'];
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
    this.toAdd.datePayment = Math.floor(Date.now());

    if (this.student.payments === undefined) {
      this.student.payments = [this.toAdd];
    } else {
      this.student.payments.push(this.toAdd);
    }
    this.as.editStudent(this.studentObservable, this.student);

    this.toAdd = new Payment();
  }

  setPayment() {
      this.student.payments[this.auxNum] = this.toAdd;
      this.edit = false;
      this.toAdd = new Payment();
      this.as.editStudent(this.studentObservable, this.student);
  }

  addAutoPayments() {
    let monthsToAdd;
    let year;
    let size;
    let valueToPay;
    let moreYear = this.months.indexOf('Janeiro');

    if (this.student.payments === undefined) {
      this.student.payments = [];
      monthsToAdd = this.months.length;
      year = new Date().getFullYear();
      valueToPay = 20;
    } else {
          size = this.student.payments.length;
          monthsToAdd = this.months.length - this.months.indexOf(this.student.payments[size - 1].month) - 1;
          year = parseInt(this.student.payments[size - 1].year);
          valueToPay = this.student.payments[size - 1].value;
    }
    for (let i = this.months.length - monthsToAdd; i < this.months.length; i++) {
      let payment = new Payment();
      if (i === moreYear) {
        year++;
      }
      payment.year = year;
      payment.month = this.months[i];
      payment.value = valueToPay;
      this.student.payments.push(payment);
    }
     this.as.editStudent(this.studentObservable, this.student);
  }

  savePayment(payment: Payment) {
    payment.datePayment = Math.floor(Date.now());
    this.student.payments[this.student.payments.indexOf(payment)] = payment;
    this.as.editStudent(this.studentObservable, this.student);
  }
}
