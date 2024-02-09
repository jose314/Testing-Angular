import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardUsersComponent} from "./components/card-users/card-users.component";
import {TableUsersComponent} from "./components/table-users/table-users.component";

const routes: Routes = [
  { path: 'table', component: TableUsersComponent},
  { path: 'card', component: CardUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
