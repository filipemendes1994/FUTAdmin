import { RouterConfig }          from '@angular/router';
import { FormStudentsComponent } from './form';
import { ListStudentsComponent} from './list';
import { StudentsCenter } from './students-center.component';
import { AuthGuardService }             from '../auth-guard.service';

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
        path: 'add',
        component: FormStudentsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: ':id',
        component: FormStudentsComponent,
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