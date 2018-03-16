import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgqDatepickerModule, th_TH } from 'ngq-datepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgqDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
