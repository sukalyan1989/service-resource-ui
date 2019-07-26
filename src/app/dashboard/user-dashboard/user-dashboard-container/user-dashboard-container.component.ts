import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/user.service';

@Component({
  selector: 'app-user-dashboard-container',
  templateUrl: './user-dashboard-container.component.html',
  styleUrls: ['./user-dashboard-container.component.css']
})
export class UserDashboardContainerComponent implements OnInit {
  currentUser:User
  pageState="Add"
  constructor(private user:UserService) { }

  ngOnInit() {
    this.currentUser=this.user.getUser()
    
  }
  setPageState(state:string){
    this.pageState=state;
  }
  getState(e:string){
  this.pageState=e;
  }
  LogOut(){
    this.user.logOut();
  }
}
