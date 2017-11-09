import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class FormationModule { }
