import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { LoginComponent } from './login/login.component';

/*
  LEARN FROM HERE
  https://www.youtube.com/watch?v=5wtnKulcquA
*/
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BasicsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
