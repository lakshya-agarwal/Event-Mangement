import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventServiceService } from 'src/app/shared/event-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private router:Router,private eventService: EventServiceService ) { }

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(route.params['id'])

    if(!eventExists)
      return this.router.navigate(['404'])

    return eventExists
  }
}
