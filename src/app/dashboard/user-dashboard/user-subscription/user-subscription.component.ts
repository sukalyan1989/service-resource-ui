import { subscribeOn } from 'rxjs/operators';
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
  searchStr:string='';
  constructor(private sub:SubscriptionService,private user:UserService) {

   }

  ngOnInit() {
  
  this.sub$=  this.sub.getSubListByUser(this.user.getUser()._id)
 // console.log(this.user.getUser()._id)
  }

  LogOut(){
    this.user.logOut()
  }
  cancelSub(sub:Subscription){
  this.sub.cancelSubscription(sub['stripeSubId'],sub['_id']).subscribe(m=>{
    alert('Subscription Cancelled');
    this.refresh();
  })
  }
  renewSub(sub:Subscription){
  this.sub.renewSubscription(sub['stripeSubId'],parseInt(sub.durationText)).subscribe(m=>{
    alert('Subscription Renewed');
    this.refresh();  
  })
  }

  refresh(){
    this.sub$=this.sub.getSubListByUser(this.user.getUser()._id)
  }
  SearchByStatus(){
    this.sub$=this.sub.getSubSearch(this.user.getUser()._id,'',this.searchStr)
  }
  SearchByTitle(){
    this.sub$=this.sub.getSubSearch(this.user.getUser()._id,this.searchStr,null)
    }
  onKey(e){
    this.searchStr=e.target.value
    if(this.searchStr==null){
      this.sub$=  this.sub.getSubListByUser(this.user.getUser()._id)
    }
  }
}
