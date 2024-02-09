import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {UsersService} from "../../services/users.service";
import {UserEntity} from "../../entities/users";


const ELEMENT_DATA: UserEntity[] = [];

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'email', 'username', 'city', 'phone', 'companyName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private userService: UsersService) {
  }

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */


  ngOnInit(): void {
    this.userService.getUsers().then((data) => {
      this.dataSource.data = data;
    });
  }
}
