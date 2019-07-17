import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EnumrModule } from 'ngx-enumr-dev';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EnumrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
