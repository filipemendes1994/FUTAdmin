import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home';
import { AlunosComponent } from './alunos';
import { AddAlunosComponent } from './alunos/add';
import { LoginComponent } from './login';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'alunos', component: AlunosComponent, canActivate:[AuthGuardService] },
  { path: 'add-alunos', component: AddAlunosComponent, canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', canActivate:[AuthGuardService] }
];

export const authProviders = [AuthGuardService, AuthService];
export const APP_ROUTE_PROVIDER = [provideRouter(routes), authProviders];
