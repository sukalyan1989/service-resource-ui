import { User, UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {
  @Input()Uid:string
  SelectedUser$:Observable<User>
  constructor(private user:UserService) {
  }
  
  ngOnInit() {
    
    this.SelectedUser$= this.user.GetUserById(this.Uid)
  }

}
