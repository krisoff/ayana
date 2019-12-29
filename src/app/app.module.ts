import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManuComponent } from './manu/manu.component';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { CostTableComponent } from './cost-table/cost-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    LogoComponent,
    AboutComponent,
    CostTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
