import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDgcTBKLLDiYciCsj8UUeWUfGGeMEs-sKM",
    authDomain: "futadmin-ea505.firebaseapp.com",
    databaseURL: "https://futadmin-ea505.firebaseio.com",
    storageBucket: "futadmin-ea505.appspot.com",
  })

]);