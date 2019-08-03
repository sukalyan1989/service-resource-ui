import { UserService, User } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor(private user:UserService,private route : Router) { }

  currentUser:User
  ngOnInit() {
    this.currentUser=this.user.getUser()
    
  }
  LogOut(){
    this.user.logOut();
  }
  toCart(){
    this.route.navigate(['user-dashboard/cart/'])
  }

}
