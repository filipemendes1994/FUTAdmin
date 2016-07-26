import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {Student , IStudent} from '../../students/student';
import { StudentsService } from '../../students/students.service';
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
  public alunoObservable: FirebaseObjectObservable<IStudent>;
  public aluno: Student;
  public edit: boolean = false;
  public toAdd: Payment;
  public auxNum: number;

  constructor(private as: StudentsService, private route: ActivatedRoute) {
    this.toAdd = new Payment();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.alunoObservable = this.as.getStudent(id);
      this.alunoObservable.subscribe(aluno => this.aluno = aluno);
      console.log(this.aluno);
    });
  }

  editPayment(pagamento: Payment) {
    this.auxNum = this.aluno.payments.indexOf(pagamento);
    this.toAdd = this.aluno.payments[this.auxNum];
    this.edit = true;
  }

  deletePayment(pagamento: Payment) {
    this.aluno.payments.splice(this.aluno.payments.indexOf(pagamento), 1);
    this.as.editStudent(this.alunoObservable, this.aluno);
  }

  addPayment() {
    this.toAdd.datePayment = Math.floor(Date.now() / 1000);

    if (this.aluno.payments === undefined) {
      this.aluno.payments = [this.toAdd];
    } else {
      this.aluno.payments.push(this.toAdd);
    }
    this.as.editStudent(this.alunoObservable, this.aluno);

    this.toAdd = new Payment();
  }

  setPayment() {
      this.toAdd.datePayment = Math.floor(Date.now() / 1000);
      this.aluno.payments[this.auxNum] = this.toAdd;
      this.edit = false;
      this.toAdd = new Payment();
      this.as.editStudent(this.alunoObservable, this.aluno);
  }

}
