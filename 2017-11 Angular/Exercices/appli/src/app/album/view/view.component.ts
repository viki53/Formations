import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public posts: any[];
  public error: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getPosts()
    .subscribe((posts) => {
      this.posts = posts;
    }, (err) => {
      this.error = err;
    });
  }

}
