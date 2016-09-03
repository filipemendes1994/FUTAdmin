import {Router} from '@angular/router/src/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-disciplines',
  templateUrl: 'list-disciplines.component.html',
  styleUrls: ['list-disciplines.component.css'],
  pipes: [],
})
export class ListDisciplinesComponent implements OnInit {

  tiles: any[] = [
    {
      text: 'Classe de Conjunto',
      icon: 'group work',
      path: 'assets/cc-bg.jpg',
      pathTurmas: 'cc',
      description: 'Aulas de Prática em Conjunto',
      cols: 1,
      rows: 1
    },
    {
      text: 'Solfejo',
      icon: 'gavel',
      path: 'assets/solf-bg.png',
      description: 'Introdução de tudo',
      pathTurmas: 'solf',
      cols: 1,
      rows: 1
    },
    { text: 'Instrumento',
      icon: 'play to work',
      path: 'assets/inst-bg.jpg',
      description: 'Aulas de Prática Instrumental',
      pathTurmas: 'inst',
      cols: 1, rows: 1
    },
    { text: 'Formação Musical',
      icon: 'music note',
      path: 'assets/fm-bg.jpg',
      description: 'Aulas com o Banaco',
      pathTurmas: 'fm',
      cols: 1,
      rows: 1
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goTo(disc: string) {
    this.router.navigate(['/disciplines/classes', disc]);
  }

}
