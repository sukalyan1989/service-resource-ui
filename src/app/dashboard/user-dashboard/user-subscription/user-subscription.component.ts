import { UserService } from 'src/app/services/user.service';
import { SubscriptionService, Subscription } from '../../../services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.css']
})
export class UserSubscriptionComponent implements OnInit {
  sub$:Observable<Subscription[]>
  constructor(private sub:SubscriptionService,private user:UserService) { }

  ngOnInit() {
  
  this.sub$=  this.sub.getSubListByUser(this.user.getUser()._id)
  console.log(this.user.getUser()._id)
  }

  LogOut(){
    this.user.logOut()
  }

}
