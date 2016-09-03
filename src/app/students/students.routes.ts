import { RouterModule, Routes }          from '@angular/router';
import { FormStudentsComponent } from './form';
import { ListStudentsComponent} from './list';
import { StudentsComponent } from './students.component';
import { AuthGuardService } from '../auth-guard.service';
import { ListPaymentsComponent} from './payments/list';

const studentRoutes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: ListStudentsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'form',
        component: FormStudentsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'form/:id',
        component: FormStudentsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'form/:id/payments',
        component: ListPaymentsComponent,
        canActivate: [AuthGuardService]
      },
    ]
  }
];

export const studentRouting = RouterModule.forChild(studentRoutes);
