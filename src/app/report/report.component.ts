import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Report, IReport } from './report';
import { ReportService} from './report.service';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  directives:[ MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [ ReportService ]
})
export class ReportComponent implements OnInit {
  report: Report;
  constructor(public rs: ReportService, public router:Router) {}

  ngOnInit() {
    this.report = new Report();
  }

  submit(){
    this.rs.report(this.report);
    this.router.navigate(['/home']);
  }

}
