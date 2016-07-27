import { RouterConfig } from '@angular/router';
import { ProfessorsCenter } from './professors-center.component';
import { ListProfessorsComponent } from './list';
import { AuthGuardService }             from '../auth-guard.service';
import { FormProfessorsComponent } from './form';

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
            path: 'form',
            component: FormProfessorsComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: ':id',
            component: FormProfessorsComponent,
            canActivate: [AuthGuardService]
        }
    ]
  }
];