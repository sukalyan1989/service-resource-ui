import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/user.service';

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.css']
})
export class AdminDashboardContainerComponent implements OnInit {

  constructor(private user:UserService) { }

  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser();

  }

}
