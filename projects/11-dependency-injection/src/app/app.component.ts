import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from "./user-info/user-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>User Listing</h1>
  @for(user of userData; track user.id) {
    <app-user-info [user]="user"/>
  }
  `,
  imports: [UserInfoComponent],
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];

  // constructor() {
  //   this.userService.getUserData().then((data) => {
  //     this.userData = data;
  //   });
  // }

  async ngOnInit(): Promise<void> {
    const data = await this.userService.getUserData();
    this.userData = data;
  }
}
