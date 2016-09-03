import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student , IStudent } from '../../student';
import { StudentsService } from '../../students.service';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Payment} from '../payment';

@Component({
  selector: 'list-payments',
  templateUrl: 'list-payments.component.html',
  styleUrls: ['list-payments.component.css'],
})

export class ListPaymentsComponent implements OnInit {
  private sub: any;
  public months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  public classesYear = ['Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro',
    'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'];

  public studentObservable: FirebaseObjectObservable<IStudent>;
  public student: Student;
  public edit: boolean = false;
  public toAdd: Payment;
  public tmpPayment: {date: Date, value: number};
  public auxNum: number;
  public payments: FirebaseListObservable<Payment[]>;
  constructor(private as: StudentsService, private route: ActivatedRoute) {
    this.toAdd = new Payment();
  }

ngOnInit() {
    this.student = new Student();
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.as.getStudent(id).subscribe(student => {
        this.student = student;
      });
      this.payments = this.as.getStudentsPayments(id);
      
    });

    this.tmpPayment = {
      'date' : new Date(2000, 1, 1),
      'value' : 0
    };
  }
  editPayment(payment: Payment) {
    let date = new Date(Number(payment.year), this.months.indexOf(this.months[payment.month]), 1);

    this.auxNum = this.student.payments.indexOf(payment);
    this.tmpPayment['date'] =  date;
    this.tmpPayment['value'] = payment.value;
    this.edit = true;
  }

  deletePayment(payment: string) {
    this.payments.remove(payment);
  }

  addPayment() {

    let date = new Date(this.tmpPayment.date.toString());

    this.payments.push(new Payment(date.getMonth(), date.getFullYear(), this.tmpPayment.value));

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
