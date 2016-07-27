import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home';

import { LoginComponent } from './login';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { studentRoutes } from './students/students.routes';
import { paymentsRoutes} from './payments/payments.routes';
import { professorsRoutes} from './professors/professors.routes';
import { disciplinesRoutes} from './disciplines/disciplines.routes';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', canActivate:[AuthGuardService] },
  ...studentRoutes,
  ...paymentsRoutes,
  ...professorsRoutes,
  ...disciplinesRoutes,
];

export const authProviders = [AuthGuardService, AuthService];
export const APP_ROUTE_PROVIDER = [provideRouter(routes), authProviders];
