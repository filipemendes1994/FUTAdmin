import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {Aluno , IAluno} from '../../alunos/aluno';
import { AlunosService } from '../../alunos/alunos.service';
import {FirebaseObjectObservable} from 'angularfire2';
import {Pagamento} from '../pagamento';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-list-pagamentos',
  templateUrl: 'list-pagamentos.component.html',
  styleUrls: ['list-pagamentos.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
  ],
  providers: [AlunosService, MdIconRegistry],
  pipes: [],
  encapsulation: ViewEncapsulation.None,
})

export class ListPagamentosComponent implements OnInit {
  private sub: any;
  public alunoObservable: FirebaseObjectObservable<IAluno>;
  public aluno: Aluno;
  public edit: boolean = false;
  public toAdd: Pagamento;
  public auxNum: number;

  constructor(private as: AlunosService, private route: ActivatedRoute) {
    this.toAdd = new Pagamento();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.alunoObservable = this.as.getAluno(id);
      this.alunoObservable.subscribe(aluno => this.aluno = aluno);
      console.log(this.aluno);
    });
  }

  editPayment(pagamento: Pagamento) {
    this.auxNum = this.aluno.pagamentos.indexOf(pagamento);
    this.toAdd = this.aluno.pagamentos[this.auxNum];
    this.edit = true;
  }

  deletePayment(pagamento: Pagamento) {
    this.aluno.pagamentos.splice(this.aluno.pagamentos.indexOf(pagamento), 1);
    this.as.editAluno(this.alunoObservable, this.aluno);
  }

  addPayment() {
    this.toAdd.datePayment = Math.floor(Date.now() / 1000);

    if (this.aluno.pagamentos === undefined) {
      this.aluno.pagamentos = new Array(this.toAdd);
    } else {
      this.aluno.pagamentos.push(this.toAdd);
    }
    this.as.editAluno(this.alunoObservable, this.aluno);

    this.toAdd = new Pagamento();
  }

  setPayment() {
      this.toAdd.datePayment = Math.floor(Date.now() / 1000);
      this.aluno.pagamentos[this.auxNum] = this.toAdd;
      this.edit = false;
      this.toAdd = new Pagamento();
      this.as.editAluno(this.alunoObservable, this.aluno);
  }

}
