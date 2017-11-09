import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ExpDocument } from '../../_models/all';

@Component({
  selector: 'app-explorer-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @Input()
  public document: ExpDocument;

  @Output('delete')
  public delete: EventEmitter<ExpDocument> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public doDelete() {
    this.delete.emit(this.document);
  }
}
