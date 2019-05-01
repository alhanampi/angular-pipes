import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core'; // LOCALE_ID is necesary to use the date pipe 

import localeEs from '@angular/common/locales/es'; // also this for the date pipe
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);


import { AppComponent } from './app.component';
import { CapitalizationPipe } from './pipes/capitalization.pipe'; // pipes go in declarations




@NgModule({
  declarations: [
    AppComponent, 
    CapitalizationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}], // date pipe. ES indicates language
  bootstrap: [AppComponent]
})
export class AppModule { }
