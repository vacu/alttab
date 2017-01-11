import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'api';

  constructor(private http: Http) {}

  authenticate(email: string, password: string): Promise<User> {
    const url = `${this.usersUrl}/authenticate`;
    let user = {
      email: email,
      password: password
    };

    return this.http.post(url, JSON.stringify(user), {headers: this.headers})
    .toPromise().then(res => res.json().data)
    .catch(this.handleError);
  }

  register(email: string, password: string): Promise<User> {
    const url = `${this.usersUrl}/register`;
    let user = {
      email: email,
      password: password
    };

    return this.http.put(url, JSON.stringify(user), {headers: this.headers})
    .toPromise().then(res => res.json().data)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
