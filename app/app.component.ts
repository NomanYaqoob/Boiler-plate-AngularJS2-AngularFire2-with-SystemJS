import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2"
@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>`,
})
export class AppComponent {

  name = 'Angular';
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.items = this.af.database.list('/items');
  }
}
