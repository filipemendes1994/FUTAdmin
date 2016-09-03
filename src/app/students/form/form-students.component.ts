import { Subscription } from 'rxjs/Rx';

let max = 5;

@Component({
  selector: 'form-student',
  templateUrl: 'form-students.component.html',
  styleUrls: ['form-students.component.css'],
})
export class FormStudentsComponent implements OnInit, OnDestroy {
  public _keyStudent: string;
  private routerSubscription: Subscription;
  private studentObservable: FirebaseObjectObservable<IStudent>;
  private studentSubscription: Subscription;

  public edit: boolean = false;
  public student: Student;
  public ra: ResponsibleAdult;
  public months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(private as: StudentsService, private router: Router, private route: ActivatedRoute){
  }


  submit() {

    this.student.responsibleAdult = this.ra;
    console.log(this.student);

    if (!this.edit) {
      this.as.addStudent(this.student);
    } else {
      this.as.editStudent(this.studentObservable, this.student);
    }

    this.router.navigate(['/students']);

  }

  ngOnInit() {
    this.student = new Student();
    this.ra = new ResponsibleAdult();
    this.routerSubscription = this.route.params.subscribe(params => {
      this._keyStudent = params['id'];
      if (this._keyStudent !== undefined) {
        this.edit = true;
        this.studentObservable = this.as.getStudent(this._keyStudent);
        this.studentSubscription = this.studentObservable.subscribe(student => {
            this.student = student;
            this.student.responsibleAdult === undefined ? this.ra = new ResponsibleAdult() : this.ra = this.student.responsibleAdult;
          });
      }
    });
  }

  goToPayments(key: string) {
      this.router.navigate(['/students/form/' + this._keyStudent + '/payments']);
  }

  cancel() {
    this.router.navigate(['/students']);
  }

  copyFromStudent(prop: string) {
    this.ra[prop] = this.student[prop];
  }

  ngOnDestroy(){

    if(this.edit){
      this.studentSubscription.unsubscribe();
    }
    this.routerSubscription.unsubscribe();

  }
}
