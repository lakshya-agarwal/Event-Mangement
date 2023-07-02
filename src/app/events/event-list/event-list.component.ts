import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  events =[{
    id:1,
    name:"Dance 4 Dance ",
    date: "6/6/2023",
    time:"10.00 AM",
    price: 1000,
    imageUrl:'/assests/images/dance.png',
    location:{
      address:"Birla Auditorium",
      city: "Delhi",
      country:"India"
    }
  },
  {
    id:1,
    name:"Dance 4 Dance ",
    date: "6/6/2023",
    time:"10.00 AM",
    price: 1000,
    imageUrl:'/assests/images/dance.png',
    location:{
      address:"Birla Auditorium",
      city: "Delhi",
      country:"India"
    }
  },
  {
    id:1,
    name:"Dance 4 Dance ",
    date: "6/6/2023",
    time:"10.00 AM",
    price: 1000,
    imageUrl:'/assests/images/dance.png',
    location:{
      address:"Birla Auditorium",
      city: "Delhi",
      country:"India"
    }
  }]


  clickEvent(event:any){
    console.log(event);
  }
}
