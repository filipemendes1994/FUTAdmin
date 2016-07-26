import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'payments-center',
    directives: [ROUTER_DIRECTIVES],
     providers: [],
    template: `
        <router-outlet></router-outlet>
    `
})
export class PaymentsCenter implements OnInit {
    constructor() { }

    ngOnInit() { }

}