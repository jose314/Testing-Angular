import {Component, OnInit} from '@angular/core';
import {UserEntity} from "../../entities/users";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-card-users',
  templateUrl: './card-users.component.html',
  styleUrls: ['./card-users.component.css']
})
export class CardUsersComponent implements OnInit {

  constructor(private userService: UsersService) {
  }

  public listUsers: UserEntity[] = [];
  public user : any;
  ngOnInit(): void {
    this.userService.getUsers().then((data)=>{
      this.listUsers = data;
      this.user = data[0];
    })
  }

}
