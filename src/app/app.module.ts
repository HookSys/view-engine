import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ViewEngineModule } from '../view-engine/view-engine.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as ViewEngineForms from './Forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewEngineModule.forRoot(ViewEngineForms),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
