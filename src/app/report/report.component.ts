import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report, IReport } from './report';
import { ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
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
