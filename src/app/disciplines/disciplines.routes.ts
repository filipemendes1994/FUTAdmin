import { RouterConfig } from '@angular/router';
import { DisciplinesCenter } from './disciplines-center.component';
import { ListDisciplinesComponent } from './list';
import { AuthGuardService }             from '../auth-guard.service';

export const disciplinesRoutes: RouterConfig = [
  {
    path: 'disciplines',
    component: DisciplinesCenter,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            component: ListDisciplinesComponent,
            canActivate: [AuthGuardService]
        },
        /*{
            path: ':id',
            component: ListPaymentsComponent,
            canActivate: [AuthGuardService]
        }*/
    ]
  }
];
