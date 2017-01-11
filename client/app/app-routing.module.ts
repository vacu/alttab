import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserComponent},
  {path: 'login', component: UserComponent},
  {path: 'authenticate', component: UserComponent},
  {path: 'register', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
