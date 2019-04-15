import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// IMPORTING HTTPCLIENT MODULE
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';

/*
  LEARN FROM HERE
  https://youtu.be/5wtnKulcquA?t=1920
*/
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BasicsComponent,
    LoginComponent,
    EventsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // IMPORTED UP THERE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
