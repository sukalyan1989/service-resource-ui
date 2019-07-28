import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.css']
})
export class AdminDashboardContainerComponent implements OnInit {

  pageState:string="Add"
  constructor(private user:UserService) { }

  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser();

  }
  setPageState(state:string){
    this.pageState=state
  }
  LogOut(){
    this.user.logOut();
  }

}
