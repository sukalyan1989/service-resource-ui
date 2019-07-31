import { UserService, User } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private user:UserService) { }

  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser();

  }

  LogOut(){
    this.user.logOut();
  }
}
