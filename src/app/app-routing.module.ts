import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Eror404Component } from './error/eror404/eror404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

const routes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: CreateEventComponent , canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent , canActivate:[EventRouteActivatorService]},
    { path: '404', component: Eror404Component },
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }