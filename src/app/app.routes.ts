import {provideRouter, RouterConfig} from '@angular/router';

import { HomeComponent } from './home';
import { AlunosComponent } from './alunos';
import { AddAlunosComponent } from './add-alunos';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'add-alunos', component: AddAlunosComponent },
  { path: '', component: HomeComponent }
];

export const APP_ROUTE_PROVIDER = provideRouter(routes);

