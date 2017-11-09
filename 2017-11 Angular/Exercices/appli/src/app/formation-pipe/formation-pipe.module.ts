import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OldEnoughPipe } from './old-enough.pipe';
import { SortByArrivalDatePipe } from './sort-by-arrival-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, OldEnoughPipe, SortByArrivalDatePipe],
  exports: [HomeComponent]
})
export class FormationPipeModule { }
