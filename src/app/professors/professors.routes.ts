import { RouterConfig } from '@angular/router';
import { ProfessorsCenter } from './professors-center.component';
import { ListProfessorsComponent } from './list-professors';
import { AuthGuardService }             from '../auth-guard.service';
import { EditProfessorsComponent } from './edit-professors';

export const professorsRoutes: RouterConfig = [
  {
    path: 'professors',
    component: ProfessorsCenter,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            component: ListProfessorsComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: 'add',
            component: EditProfessorsComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: ':id',
            component: EditProfessorsComponent,
            canActivate: [AuthGuardService]
        }
    ]
  }
];