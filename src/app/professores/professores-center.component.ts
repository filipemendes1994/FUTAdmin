import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';
import { ProfessoresService } from './professores.service';

@Component({
    moduleId: module.id,
    selector: 'professores-center',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfessoresService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class ProfessoresCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}