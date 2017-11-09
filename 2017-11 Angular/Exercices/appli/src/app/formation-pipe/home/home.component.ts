import { Component, OnInit } from '@angular/core';

import { Pupil } from '../../_models/all';

@Component({
  selector: 'app-formation-pipe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pupils: Pupil[] = [];
  public minAge = 18;
  public arrivalDateOrder = 'ASC';

  constructor() {
    for (let i = 0; i < 10; i++) {
      const pupil = new Pupil();
      pupil.arrivalDate = new Date();
      pupil.arrivalDate.setDate(pupil.arrivalDate.getDate() - Math.random() * 5);
      this.pupils.push(pupil);
    }
  }

  ngOnInit() {
  }

}
