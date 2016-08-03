import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';
import { ClassesService } from './classes.service';

@Component({
    moduleId: module.id,
    selector: 'classes-center',
    directives: [ROUTER_DIRECTIVES],
    providers: [ClassesService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class ClassesCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}
