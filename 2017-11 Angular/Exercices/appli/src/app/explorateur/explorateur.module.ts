import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ListeComponent } from './liste/liste.component';
import { DocumentComponent } from './document/document.component';
import { DirectoryComponent } from './directory/directory.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListeComponent,
    DocumentComponent,
    DirectoryComponent,
    FileSizePipe
  ],
  exports: [ListeComponent],
  providers: [DecimalPipe]
})
export class ExplorateurModule { }
