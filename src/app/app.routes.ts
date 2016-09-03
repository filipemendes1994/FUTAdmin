import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home';

import { LoginComponent } from './login';
import { ReportComponent } from './report';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { } from './students/students.routes';



const routesConfig: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuardService] }
];

export const authProviders = [AuthGuardService, AuthService];
export const routing = RouterModule.forRoot(routesConfig);
