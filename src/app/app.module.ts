import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManuComponent } from './manu/manu.component';
import { AboutComponent } from './about/about.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import {AppRouting} from './app.routing';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    AboutComponent,
    CostTableComponent,
    ContactComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
