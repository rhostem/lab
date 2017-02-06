import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Logger } from './service/logger.service';

import { AppComponent } from './app.component';
import { Testlog } from './testlog/testlog.component';

@NgModule({
  declarations: [
    AppComponent,
    Testlog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: [
  //   Logger
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
