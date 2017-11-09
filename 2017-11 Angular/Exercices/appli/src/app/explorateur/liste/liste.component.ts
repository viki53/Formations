import { Component, OnInit } from '@angular/core';

import { ExpDirectory, ExpDocument } from '../../_models/all';

@Component({
  selector: 'app-explorer-list',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  public folders: ExpDirectory[] = [];

  constructor() {
    for (let i = 0; i < Math.round(1 + Math.random() * 10); i++) {
      this.folders.push(new ExpDirectory());
    }
  }

  ngOnInit() {
  }

}
