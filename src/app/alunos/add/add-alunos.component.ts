import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {Aluno} from '../aluno';
import { AlunosService } from '../alunos.service';

let max = 5;

@Component({
  moduleId: module.id,
  selector: 'add-alunos',
  templateUrl: 'add-alunos.component.html',
  styleUrls: ['add-alunos.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    FORM_DIRECTIVES,
    NgFor,
  ],
  providers: [AlunosService]
})
export class AddAlunosComponent implements OnInit {
  constructor(private as:AlunosService){}
  aluno: Aluno;

  submit()
  {
    this.as.addAluno(this.aluno);
  }

  ngOnInit()
  {
    this.aluno = new Aluno();   
  }
}
