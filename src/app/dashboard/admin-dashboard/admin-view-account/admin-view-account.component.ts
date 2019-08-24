import { UserService, User } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-view-account',
  templateUrl: './admin-view-account.component.html',
  styleUrls: ['./admin-view-account.component.css']
})
export class AdminViewAccountComponent implements OnInit {
  DetailsView:boolean =false
  currentUid:string
  UserList$:Observable<User[]>
  searchStr:string=""
  constructor(private user:UserService) { 
  this.UserList$=this.user.GetAllUsers();
  }

  ngOnInit() {
  }
  Details(id:string){
    console.log(id,this.DetailsView)
    this.currentUid=id;
    this.DetailsView=!this.DetailsView
  }
  

}
