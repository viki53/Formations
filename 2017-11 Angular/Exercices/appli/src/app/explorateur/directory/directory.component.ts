import { Component, Input, OnInit } from '@angular/core';

import { ExpDirectory, ExpDocument } from '../../_models/all';

@Component({
  selector: 'app-explorer-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  @Input()
  public directory: ExpDirectory;

  constructor() { }

  ngOnInit() {
  }

  public deleteDocument(doc: ExpDocument) {
    this.directory.removeFile(doc);
  }

}
