import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home';

import { LoginComponent } from './login';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

<<<<<<< HEAD
import { studentRoutes } from './students/students.routes';
import { paymentsRoutes} from './payments/payments.routes';
=======
import { alunosRoutes} from './alunos/alunos.routes';
import { pagamentosRoutes} from './pagamentos/pagamentos.routes';
import { professorsRoutes} from './professors/professors.routes';
>>>>>>> d1cc96b969596835e4ba4fee0fb766a18900b1ab

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', canActivate:[AuthGuardService] },
<<<<<<< HEAD
  ...studentRoutes,
  ...paymentsRoutes,
=======
  ...alunosRoutes,
  ...pagamentosRoutes,
  ...professorsRoutes,
>>>>>>> d1cc96b969596835e4ba4fee0fb766a18900b1ab
];

export const authProviders = [AuthGuardService, AuthService];
export const APP_ROUTE_PROVIDER = [provideRouter(routes), authProviders];
