import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2"
@Component({
  selector: 'my-app',
  template: `<ul>
  <li class="text" *ngFor="let item of items | async">
    {{item.$value}}
  </li>
</ul>`,
})
export class AppComponent {

  name = 'Angular';
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.items = this.af.database.list('/items');
  }
}
