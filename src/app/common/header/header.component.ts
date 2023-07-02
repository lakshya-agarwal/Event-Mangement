import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   togglePopup() {
    console.log("create event");
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.toggle("hidden");
    }
  }
}
