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
import {IAluno, Aluno} from '../aluno';
import { AlunosService } from '../alunos.service';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2';
import { MODAL_DIRECTIVES} from 'ng2-bs3-modal/ng2-bs3-modal';

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
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    MODAL_DIRECTIVES,
    NgFor,
  ],
  providers: [AlunosService]
})
export class AddAlunosComponent implements OnInit {

  private edit:boolean = false;
  private sub:any;
  private alunoObservable: FirebaseObjectObservable<IAluno>;
  public aluno: Aluno;

  constructor(private as: AlunosService, private route: ActivatedRoute){}


  submit()
  {
    console.log(this.edit);
    if(!this.edit) {
      this.as.addAluno(this.aluno);
    } else {
      this.as.editAluno(this.alunoObservable, this.aluno);
    }
  }

  ngOnInit()
  {
    this.aluno = new Aluno();
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      if(id != undefined)
      {
        this.edit = true;
        this.alunoObservable = this.as.getAluno(id);
        this.alunoObservable.subscribe(aluno =>{ this.aluno = aluno});
      }
    });
  }

  @ViewChild(Alert) alert;
  alertOpen(){
      this.alert.alertHeader = true;
      this.alert.alertTitle = "A simple Alert modal window";
      this.alert.message = "It is a classic Alert modal with title, body, footer.";
      this.alert.alertFooter = true;
      this.alert.okButton = false;
      this.alert.cancelButton = true;
      this.alert.cancelButtonText = "Ok, Got it.";
      this.alert.open();
    }
}
