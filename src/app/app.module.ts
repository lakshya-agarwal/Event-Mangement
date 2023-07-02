import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { HeaderComponent } from './common/header/header.component';
import { EventServiceService } from './shared/event-service.service';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Eror404Component } from './error/eror404/eror404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Eror404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
    ],
  providers: [EventServiceService,
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    {
      provide:'canDeactivateCreateEvent',
      useValue:ckeckDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ckeckDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm("Do you Really want to Cancel ?")
  return true;
}
