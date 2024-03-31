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
import { FormsModule } from '@angular/forms';
import { CoronainformationComponent } from './components/coronainformation/coronainformation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EditcardComponent,
    HomeComponent,
    HMOmemberComponent,
    AddHmomemberComponent,
    CoronainformationComponent
    ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
