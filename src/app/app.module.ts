import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManuComponent } from './manu/manu.component';
import { AboutComponent } from './about/about.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import {AppRouting} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    AboutComponent,
    CostTableComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
