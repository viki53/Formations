import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user = {
    firstName: 'Toto',
    lastName: 'Dupond'
  };

  public result: string[] = [];

  public doSomething() {
    this.user.firstName = null;

    // alert('Hey !');
  }

  public spoke(phrase: string) {
    this.result.push(phrase);
  }
}
