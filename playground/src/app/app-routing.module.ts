import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


