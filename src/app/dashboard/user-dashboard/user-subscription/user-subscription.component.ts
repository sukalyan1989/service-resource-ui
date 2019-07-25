import { SubscriptionService } from './../../../subscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.css']
})
export class UserSubscriptionComponent implements OnInit {

  constructor(private sub:SubscriptionService) { }

  ngOnInit() {
    this.sub.getSubListByUser
  }


}
