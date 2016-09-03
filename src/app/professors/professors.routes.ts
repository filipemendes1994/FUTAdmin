import { Routes, RouterModule } from '@angular/router';
import { ProfessorsComponent } from './professors.component';
import { ListProfessorsComponent } from './list';
import { AuthGuardService } from '../auth-guard.service';
import { FormProfessorsComponent } from './form';

const professorsRoutes: Routes = [
  {
    path: 'professors',
    component: ProfessorsComponent,
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

export const professorsRouting = RouterModule.forChild(professorsRoutes);
