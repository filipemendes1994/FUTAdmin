import { RouterConfig }          from '@angular/router';
import { FormStudentsComponent } from './form';
import { ListStudentsComponent} from './list';
import { StudentsCenter } from './students-center.component';
import { AuthGuardService }             from '../auth-guard.service';
import { ListPaymentsComponent} from './payments/list';

export const studentRoutes: RouterConfig = [
  {
    path: 'students',
    component: StudentsCenter,
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


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/