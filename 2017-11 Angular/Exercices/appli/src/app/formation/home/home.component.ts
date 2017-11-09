import { Component, OnInit } from '@angular/core';

import { Pupil } from '../../_models/all';

@Component({
  selector: 'app-formation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pupils: Pupil[] = [];
  public rawPupils: Pupil[] = [];
  public minAge = 18;
  public arrivalDateSort = 'ASC';

  constructor() {
    for (let i = 0; i < 10; i++) {
      const pupil = new Pupil();
      pupil.arrivalDate = new Date();
      pupil.arrivalDate.setDate(pupil.arrivalDate.getDate() - Math.random() * 5);
      this.rawPupils.push(pupil);
    }

    this.filterPupils();
  }

  ngOnInit() {
  }

  public filterPupils() {
    this.pupils = this.rawPupils
    .filter((pupil: Pupil) => {
      return pupil.age >= this.minAge;
    })
    .sort((a: Pupil, b: Pupil) => {
      if (a.arrivalDate > b.arrivalDate) {
        return this.arrivalDateSort === 'ASC' ? -1 : +1;
      }
      if (a.arrivalDate < b.arrivalDate) {
        return this.arrivalDateSort === 'ASC' ? +1 : -1;
      }
      return 0;
    });
  }

}
