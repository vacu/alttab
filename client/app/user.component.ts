import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/user.component.html',
  styleUrls: [ 'app/user.component.css' ]
})
export class UserComponent implements OnInit {
  user: User;
  public loggedIn = false;

  constructor(
    private userService: UserService,
    private router: Router) { }

    authenticate(email: string, password: string): void {
      this.userService.authenticate(email, password).then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.loggedIn = true;
        this.user = user;
      });
    }

    register(email: string, password: string): void {
      this.userService.register(email, password).then(user => {
        this.user = user;
      });
    }

    logout(): void {
      localStorage.removeItem('user');
      this.loggedIn = false;
    }

    ngOnInit(): void {
      if (localStorage.getItem('user')) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user)
          this.loggedIn = true;
      }
    }
}
