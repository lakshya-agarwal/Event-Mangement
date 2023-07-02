import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }

   
  getEvents(){
    return events;
  }

  getEvent(id:number){
    return events.filter(event => event.id == id)[0];
  }
}

const events =[{
  id: 1,
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
  id:2,
  name:"Art Display ",
  date: "6/6/2023",
  time:"9.00 AM",
  price: 1000,
  imageUrl:'/assests/images/dance.png',
  location:{
    address:"Birla Auditorium",
    city: "Delhi",
    country:"India"
  }
},
{
  id:3,
  name:"Singing with All ",
  date: "6/6/2023",
  time:"8.00 AM",
  price: 1000,
  imageUrl:'/assests/images/dance.png',
  location:{
    address:"Birla Auditorium",
    city: "Delhi",
    country:"India"
  }
}]

