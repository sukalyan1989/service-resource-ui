import { User, UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionService, Subscription } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {
  @Input()Uid:string
  SelectedUser$:Observable<User>
  CurrentUserSubscriptions$:Observable<Subscription[]>
  CurrentSubscriptionInvoices$:Observable<any>
  constructor(private user:UserService,private sub:SubscriptionService) {
  }
  
  ngOnInit() {
    
    this.SelectedUser$= this.user.GetUserById(this.Uid)
    this.CurrentUserSubscriptions$=this.sub.getSubListByUser(this.Uid)
    
  }
  handleGetInvoiceClick(subId:string){
    this.CurrentSubscriptionInvoices$=this.sub.getSubscriptionDetails(subId);
  }

}
