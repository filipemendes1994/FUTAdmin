import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'students-component',
    template: `<router-outlet></router-outlet>`
})
export class StudentsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}