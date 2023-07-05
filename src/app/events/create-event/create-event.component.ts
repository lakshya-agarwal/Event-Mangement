import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/shared/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  isDirty:boolean = true  
  constructor(private formBuilder:FormBuilder,private router:Router, private eventService:EventServiceService ){

  }
  createForm!: FormGroup;

  ngOnInit(){
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      price: ['', Validators.required],
      location: ['', Validators.required],
    });

  }


  cancel(){
    this.router.navigate(['/events'])
  }

  onSubmit(){
    if(this.createForm.valid){
      this.eventService.saveEvent(this.createForm.value);
      this.isDirty=false;
      this.router.navigate(['/events'])
    }
  }
}
