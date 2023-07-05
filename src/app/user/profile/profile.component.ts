import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  currentUser!: IUser;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
     this.currentUser = this.authService.getUser();
    console.log(this.currentUser);
    this.profileForm = this.formBuilder.group({
      userName: [this.currentUser.userName, Validators.required],
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName, Validators.required],
      id: [this.currentUser.id, Validators.required],
      address: [this.currentUser.address],
      mobileNo: [this.currentUser.mobileNo],
      email: [this.currentUser.email],
      DOB: [this.currentUser.DOB, Validators.required]
    });
  }


  onSave(): void {
    if (this.profileForm.valid) {
      // Save the form data
      console.log(this.profileForm.value);
    }
  }
}
