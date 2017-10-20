import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyA2bpwMze0L--e61iM6zMtnBVmzmwnFb70",
  authDomain: "fitness-app-221c2.firebaseapp.com",
  databaseURL: "https://fitness-app-221c2.firebaseio.com",
  projectId: "fitness-app-221c2",
  storageBucket: "fitness-app-221c2.appspot.com",
  messagingSenderId: "678725160327"
};
*/