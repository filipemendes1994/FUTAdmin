import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { StudentsService } from './students.service';

@Component({
    moduleId: module.id,
    selector: 'student-center',
    directives: [ROUTER_DIRECTIVES],
     providers: [StudentsService],
    template: `
        <router-outlet></router-outlet>
    `
})
export class StudentsCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}