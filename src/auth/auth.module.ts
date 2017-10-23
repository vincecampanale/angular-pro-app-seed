import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyA2bpwMze0L--e61iM6zMtnBVmzmwnFb70",
  authDomain: "fitness-app-221c2.firebaseapp.com",
  databaseURL: "https://fitness-app-221c2.firebaseio.com",
  projectId: "fitness-app-221c2",
  storageBucket: "fitness-app-221c2.appspot.com",
  messagingSenderId: "678725160327"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}