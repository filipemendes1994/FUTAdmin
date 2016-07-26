import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';
import { ProfessorsService } from './professors.service';

@Component({
    moduleId: module.id,
    selector: 'professors-center',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProfessorsService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class ProfessorsCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}