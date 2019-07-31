import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard-container',
  templateUrl: './user-dashboard-container.component.html',
  styleUrls: ['./user-dashboard-container.component.css']
})
export class UserDashboardContainerComponent implements OnInit {
  constructor(private user:UserService) { }
  
  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser()
    
  }
  
  LogOut(){
    this.user.logOut();
  }
}
