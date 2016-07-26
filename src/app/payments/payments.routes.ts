import { RouterConfig } from '@angular/router';
import { PaymentsCenter } from './payments-center.component';
import { ListPaymentsComponent } from './list';
import { AuthGuardService }             from '../auth-guard.service';

export const paymentsRoutes: RouterConfig = [
  {
    path: 'payments',
    component: PaymentsCenter,
    canActivate: [AuthGuardService],
    children: [
        {
            path: ':id',
            component: ListPaymentsComponent,
            canActivate: [AuthGuardService]
        }
    ]
  }
];
