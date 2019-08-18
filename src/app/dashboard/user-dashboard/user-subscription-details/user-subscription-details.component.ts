import { SubscriptionService } from 'src/app/services/subscription.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-subscription-details',
  templateUrl: './user-subscription-details.component.html',
  styleUrls: ['./user-subscription-details.component.css']
})
export class UserSubscriptionDetailsComponent implements OnInit {

  subDetails$:Observable<any>
  constructor(private router:ActivatedRoute,private sub:SubscriptionService) { }

  ngOnInit() {
    this.router.params.subscribe(id=>this.subDetails$=this.sub.getSubscriptionDetails(id['id']))
  }

}
