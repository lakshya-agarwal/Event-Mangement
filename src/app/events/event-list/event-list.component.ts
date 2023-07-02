import { Component } from '@angular/core';
import { ToastrConfig, ToastrService } from 'ngx-toastr';
import { EventServiceService } from 'src/app/shared/event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  events: any[] = [];
  constructor(private eventService:EventServiceService,private toastr: ToastrService){
    this.toastr.toastrConfig.positionClass = 'toast-container';
    this.toastr.toastrConfig.toastClass = 'toast-padded bg-purple-500 text-white font-bold'
    
  }

  ngOnInit(){
    this.events=this.eventService.getEvents();
  }

  clickEvent(event:any){
    console.log(event);
    this.toastr.success(event.name);
  }
}
