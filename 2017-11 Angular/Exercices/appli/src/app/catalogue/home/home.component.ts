import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalogue-home, [app-catalogue-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('nom')
  public toto = 'Marty';

  @Output()
  public speak: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    this.speak.emit('Bonjour !');
  }

}
