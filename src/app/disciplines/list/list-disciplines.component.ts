import { Component, OnInit } from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-list-disciplines',
  templateUrl: 'list-disciplines.component.html',
  styleUrls: ['list-disciplines.component.css'],
  directives: [MD_GRID_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_ICON_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry],
  pipes: [],
})
export class ListDisciplinesComponent implements OnInit {

  tiles: any[] = [
    {text: 'Classe de Conjunto', icon: 'group work', path: 'assets/cc-bg.jpg',
      pathTurmas: 'cc', description: 'Aulas de Prática em Conjunto', cols: 1, rows: 1},
    {text: 'Solfejo', icon: 'gavel', path: 'assets/solf-bg.png',
      description: 'Introdução de tudo', pathTurmas: 'solf', cols: 1, rows: 1},
    {text: 'Instrumento', icon: 'play to work', path: 'assets/inst-bg.jpg',
      description: 'Aulas de Prática Instrumental', pathTurmas: 'inst', cols: 1, rows: 1},
    {text: 'Formação Musical', icon: 'music note', path: 'assets/fm-bg.jpg',
      description: 'Aulas com o Banaco', pathTurmas: 'fm', cols: 1, rows: 1},
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goTo(disc: string) {
    this.router.navigate(['/disciplines/classes', disc]);
  }

}
