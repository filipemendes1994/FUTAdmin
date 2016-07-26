import { RouterConfig } from '@angular/router';
import { ProfessoresCenter } from './professores-center.component';
import { ListProfessoresComponent } from './list-professores';
import { AuthGuardService }             from '../auth-guard.service';
import { EditProfessoresComponent } from './edit-professores';

export const professoresRoutes: RouterConfig = [
  {
    path: 'professores',
    component: ProfessoresCenter,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            component: ListProfessoresComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: 'add',
            component: EditProfessoresComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: ':id',
            component: EditProfessoresComponent,
            canActivate: [AuthGuardService]
        }

    ]
  }
];