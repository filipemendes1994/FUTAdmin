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
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

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
    MD_TOOLBAR_DIRECTIVES,
  ],
  providers: [MdIconRegistry],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
})

export class ListPaymentsComponent implements OnInit {
  public months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  public classesYear = ['Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro',
    'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'];
  private sub: any;
  public studentObservable: FirebaseObjectObservable<IStudent>;
  public student: Student;
  public edit: boolean = false;
  public toAdd: Payment;
  public tmpPayment: {date: Date, value: number};
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

    this.tmpPayment = {
      'date' : new Date(2000, 1, 1),
      'value' : 0
    };
  }

  editPayment(pagamento: Payment) {
    let date = new Date(Number(pagamento.year), this.months.indexOf(this.months[pagamento.month]), 1);

    this.auxNum = this.student.payments.indexOf(pagamento);
    this.tmpPayment['date'] =  date;
    this.tmpPayment['value'] = pagamento.value;
    this.edit = true;
  }

  deletePayment(pagamento: Payment) {
    this.student.payments.splice(this.student.payments.indexOf(pagamento), 1);
    this.as.editStudent(this.studentObservable, this.student);
  }

  addPayment() {

    let date = new Date(this.tmpPayment.date.toString());

    if (this.student.payments === undefined) {
      this.student.payments = [];
    }

    console.log(this.tmpPayment);
    this.student.payments.push(new Payment(date.getMonth(), date.getFullYear(), this.tmpPayment.value));
    this.as.editStudent(this.studentObservable, this.student);

    this.tmpPayment = {
      'date' : new Date(2000, 1, 1),
      'value' : 0
    };
  }

  setPayment() {
      let date = new Date(this.tmpPayment['date'].toString());

      this.student.payments[this.auxNum] = new Payment(date.getMonth(), date.getFullYear(), this.tmpPayment.value);
      this.edit = false;

      this.as.editStudent(this.studentObservable, this.student);
      this.tmpPayment = {
        'date' : new Date(2000, 1, 1),
        'value' : 0
      };
  }

  addAutoPayments() {
    let monthsToAdd;
    let year;
    let size;
    let valueToPay;
    let moreYear = this.classesYear.indexOf('Janeiro');

    if (this.student.payments === undefined) {
      this.student.payments = [];
      valueToPay = 20;
    } else {
          size = this.student.payments.length;
          monthsToAdd = this.classesYear.length - this.classesYear.indexOf(this.months[this.student.payments[size - 1].month]) - 1;
          year = this.student.payments[size - 1].year;
          valueToPay = this.student.payments[size - 1].value;
    }

    for (let i = this.classesYear.length - monthsToAdd; i < this.classesYear.length; i++) {
      let payment = new Payment();
      if (i === moreYear) {
        year++;
      }
      payment.year = year;
      payment.month = this.months.indexOf(this.classesYear[i]);
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
