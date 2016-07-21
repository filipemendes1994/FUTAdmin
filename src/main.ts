import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
import { APP_ROUTE_PROVIDER } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTE_PROVIDER,
  FIREBASE_PROVIDERS,
  HTTP_PROVIDERS,
  defaultFirebase({
    apiKey: 'xxxxxxxxxx',
    authDomain: 'xxxxxxxxxxx',
    databaseURL: 'xxxxxxxxxxxxx',
    storageBucket: 'xxxxxxxxxxxxxxx',
  }),
  disableDeprecatedForms(),
  provideForms(),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
  })

]);