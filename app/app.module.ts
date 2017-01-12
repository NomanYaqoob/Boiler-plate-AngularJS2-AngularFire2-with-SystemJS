import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCnaeajCvUlSe_dtsp5KmDowstSvcnqwVA",
  authDomain: "exaple-deploy.firebaseapp.com",
  databaseURL: "https://exaple-deploy.firebaseio.com",
  storageBucket: "exaple-deploy.appspot.com",
  messagingSenderId: "807105921955"
};

@NgModule({
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
