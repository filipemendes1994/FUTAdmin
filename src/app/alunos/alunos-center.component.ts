import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { AlunosService } from './alunos.service';

@Component({
    moduleId: module.id,
    selector: 'alunos-center',
    directives: [ROUTER_DIRECTIVES],
     providers: [AlunosService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class AlunosCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}