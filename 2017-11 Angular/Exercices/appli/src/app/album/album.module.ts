import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { ApiService } from './api.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    ViewComponent
  ],
  declarations: [ViewComponent],
  providers: [
    ApiService
  ]
})
export class AlbumModule { }
