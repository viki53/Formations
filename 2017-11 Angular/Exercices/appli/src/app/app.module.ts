import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { CatalogueModule } from './catalogue/catalogue.module';
import { FormationModule } from './formation/formation.module';
import { FormationPipeModule } from './formation-pipe/formation-pipe.module';
import { ExplorateurModule } from './explorateur/explorateur.module';

import { AppComponent } from './app.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogueModule,
    FormationModule,
    ExplorateurModule,
    FormationPipeModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
