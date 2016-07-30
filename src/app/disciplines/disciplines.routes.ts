import { RouterConfig } from '@angular/router';
import { DisciplinesCenter } from './disciplines-center.component';
import { ListDisciplinesComponent } from './list';
import { AuthGuardService }             from '../auth-guard.service';
import {classesRoutes} from './classes/classes.routes';

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
        ...classesRoutes,
    ]
  }
];
