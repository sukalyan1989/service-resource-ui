import { UserService, User } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor(private user:UserService) { }

  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser()
    
  }
  LogOut(){
    this.user.logOut();
  }

}
