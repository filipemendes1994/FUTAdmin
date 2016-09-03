import { Routes, RouterModule } from '@angular/router';
import { ListClassesComponent } from './list';
import { FormClassesComponent } from './form';
import { AuthGuardService }             from '../../auth-guard.service';



export const classesRoutes: Routes = [
  {
    path: 'classes',
    children: [
        {
            path: ':type',
            component: ListClassesComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: ':type/form',
            component: FormClassesComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: ':type/form/:id',
            component: FormClassesComponent,
            canActivate: [AuthGuardService]
        },
    ]
  }
];

