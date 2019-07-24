import { SubscriptionService, Subscription } from './../../../subscription.service';
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

}
