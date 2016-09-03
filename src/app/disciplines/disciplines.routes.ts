import {classesRoutes} from './classes/classes.routes';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinesComponent } from './disciplines.component';
import { ListDisciplinesComponent } from './list';
import { AuthGuardService } from '../auth-guard.service';

const disciplinesRoutes: Routes = [
  {
    path: 'disciplines',
    component: DisciplinesComponent,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            component: ListDisciplinesComponent,
            canActivate: [AuthGuardService]
        },

        ...classesRoutes
    ]
  },
];

export const disciplinesRouting = RouterModule.forChild(disciplinesRoutes);
