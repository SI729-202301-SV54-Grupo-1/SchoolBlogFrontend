import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-blog';

  constructor(private router: Router) {
  }


  getCurrentUserEmail() {
      let currentUserString = localStorage.getItem('currentUser');
      if (currentUserString) {
        console.log(`current user: ${currentUserString}`);
        let currentUser = (JSON.parse(currentUserString));
        console.log(currentUser);
        return currentUser.email;
      } else return null;

  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['home']).then();
    console.log("Signed Out");
  }
}
