import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home';

import { LoginComponent } from './login';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { alunosRoutes} from './alunos/alunos.routes';
import { pagamentosRoutes} from './pagamentos/pagamentos.routes';
import { professorsRoutes} from './professors/professors.routes';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', canActivate:[AuthGuardService] },
  ...alunosRoutes,
  ...pagamentosRoutes,
  ...professorsRoutes,
];

export const authProviders = [AuthGuardService, AuthService];
export const APP_ROUTE_PROVIDER = [provideRouter(routes), authProviders];
