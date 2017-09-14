import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {ContactUsComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {UpdateComponent} from './update/update.component';
//import {SportsComponent} from './sports/sports.component';

import {UpdateService} from './update/update.service';

import {routerModule} from './app.routes'

@NgModule({
  imports:      [
     BrowserModule,
     routerModule
      ],
  declarations: [
     AppComponent,
     ContactUsComponent,
     HomeComponent,
     UpdateComponent
     //SportsComponent
      ],
  providers:[
     UpdateService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
