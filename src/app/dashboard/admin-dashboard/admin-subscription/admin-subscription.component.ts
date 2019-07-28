import { SubscriptionService, Subscription } from '../../../services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-subscription',
  templateUrl: './admin-subscription.component.html',
  styleUrls: ['./admin-subscription.component.css']
})
export class AdminSubscriptionComponent implements OnInit {

  subs$:Observable<Subscription[]>
  constructor(private sub:SubscriptionService) { }

  ngOnInit() {

    this.subs$=this.sub.getSubList()
  }
handleCancel(id:string){
  this.sub.updateSubStatus(id,'Cancelled')
}
handleApprove(id:string){
  this.sub.updateSubStatus(id,'Active')
}
}
