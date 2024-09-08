import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Jorge',
    lastname: 'Garcia',
    email: 'jorge.garcia@mail.com',
    username: 'jorge',
    password: '12345'

  },
  {
    id: 2,
    name: 'Alex',
    lastname: 'Gómez',
    email: 'alex.gomez@mail.com',
    username: 'alex',
    password: '12345'
  }
];
  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }

}
