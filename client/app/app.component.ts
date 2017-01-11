import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3><a routerLink="/home" routerLinkActive="active">{{title}}</a></h3>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login/Register</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {
  title = 'Alttab';
}
