import { RouterConfig } from '@angular/router';
import { ListClassesComponent } from './list';
import { FormClassesComponent } from './form';
import { AuthGuardService }             from '../../auth-guard.service';
import { ClassesCenter } from './classes-center.component';

export const classesRoutes: RouterConfig = [
  {
    path: 'classes',
    component: ClassesCenter,
    canActivate: [AuthGuardService],
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
