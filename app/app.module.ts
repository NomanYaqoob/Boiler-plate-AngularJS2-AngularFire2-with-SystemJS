import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

// Your App Configuration which can found on firebase.google.com
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
// Your App Configuration which can found on firebase.google.com

@NgModule({
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
