import {Component, OnInit, ViewContainerRef} from '@angular/core';
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
import {AlunosService} from '../alunos.service';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular2-material/dialog/dialog';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';

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
    NgFor,
  ],
  providers: [MdDialog, AlunosService, OVERLAY_PROVIDERS]
})
export class AddAlunosComponent implements OnInit {

  private sub: any;
  private alunoObservable: FirebaseObjectObservable<IAluno>;
  private dialogRef: MdDialog;
  private lastCloseResult: string;

  public edit: boolean = false;
  public aluno: Aluno;

  constructor(private as: AlunosService, private route: ActivatedRoute,
    public dialog: MdDialog, public viewContainerRef: ViewContainerRef){

    }


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
      if (id !== undefined) {
        this.edit = true;
        this.alunoObservable = this.as.getAluno(id);
        this.alunoObservable.subscribe(aluno => { this.aluno = aluno; });
      }
    });
  }

  open() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialog.open(JazzDialog, config).then(ref => {
      this.dialogRef = ref;

      this.dialogRef.afterClosed().subscribe(result => {
        this.lastCloseResult = result;
        this.dialogRef = null;
      });
    });
  }
}

@Component({
  selector: 'demo-jazz-dialog',
  template: `
  <p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
})

export class JazzDialog {
  constructor(public dialogRef: MdDialogRef<JazzDialog>) { }
}
