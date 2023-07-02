import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventServiceService } from 'src/app/shared/event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any;

  constructor(private eventService: EventServiceService,private route: ActivatedRoute){

  }

  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
    console.log(this.event);
  }
}
