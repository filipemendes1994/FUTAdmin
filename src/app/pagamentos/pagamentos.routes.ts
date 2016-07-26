import { RouterConfig } from '@angular/router';
import { PagamentosCenter } from './pagamentos-center.component';
import { ListPagamentosComponent } from './list-pagamentos';
import { AuthGuardService }             from '../auth-guard.service';

export const pagamentosRoutes: RouterConfig = [
  {
    path: 'pagamentos',
    component: PagamentosCenter,
    canActivate: [AuthGuardService],
    children: [
        {
            path: ':id',
            component: ListPagamentosComponent,
            canActivate: [AuthGuardService]
        }
    ]
  }
];
