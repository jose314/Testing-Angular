import {Injectable} from '@angular/core';
import {UserEntity} from "../entities/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  public async getUsers(): Promise<UserEntity[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: any[] = await res.json();

    return data.map(element => new UserEntity(element))
  }
}
