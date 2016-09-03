import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { HttpModule } from '@angular/http';

import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdInputModule } from '@angular2-material/input';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRippleModule } from '@angular2-material/core';

import { routing, authProviders } from './app.routes';

import { StudentsModule} from './students';
import { ProfessorsModule } from './professors';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ReportComponent } from './report';
import { DisciplinessModule } from './disciplines';





const firebaseConfig = {
  apiKey: "AIzaSyA98Scf5lhfvJYttuoRhlRKb09ZmpsEHBk",
    authDomain: "orq-mendes.firebaseapp.com",
    databaseURL: "https://orq-mendes.firebaseio.com",
    storageBucket: "orq-mendes.appspot.com",
};
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule,
    MdSidenavModule,
    MdInputModule,
    MdGridListModule,
    MdCardModule,
    MdProgressCircleModule,
    MdProgressBarModule,
    MdRippleModule,
    StudentsModule,
    ProfessorsModule,
    DisciplinessModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [authProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}

