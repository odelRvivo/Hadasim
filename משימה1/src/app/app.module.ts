import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EditcardComponent } from './components/editcard/editcard.component';
import { HomeComponent } from './components/home/home.component';

import { HMOmemberComponent } from './components/hmomember/hmomember.component';
import { AddHmomemberComponent } from './components/add-hmomember/add-hmomember.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EditcardComponent,
    HomeComponent,
    HMOmemberComponent,
    AddHmomemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
